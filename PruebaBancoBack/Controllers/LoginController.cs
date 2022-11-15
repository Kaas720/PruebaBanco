using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using PruebaBancoBack.Data;
using PruebaBancoBack.helpers;
using PruebaBancoBack.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace PruebaBancoBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _accessor;
        public LoginController(DataContext context, IConfiguration configuration, IHttpContextAccessor accessor)
        {
            _context = context;
            _configuration = configuration;
            _accessor = accessor;
        }
        [HttpPost("Login")]
        public async Task<ActionResult> LoginCliente(UserData dataUser)
        {
            var uset_temp = await _context.credenciales.FirstOrDefaultAsync(x => x.correo.ToLower().Equals(dataUser.correo.ToLower()));
            if (uset_temp == null)
            {
                return BadRequest("Usuario no encontrado");
            }
            else
            {
                if (uset_temp.passwordUser.Equals(dataUser.paasword))
                {
                    return Ok(JsonConvert.SerializeObject(CearToken(uset_temp)));
                }
                else
                {
                    return BadRequest("Contraseña incorrecta");
                }
            }
        }
        private string CearToken(Credenciales user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.idPersona.ToString()), new Claim(ClaimTypes.Name, user.correo)
            };
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        [Authorize]
        [HttpGet("/BuscarPersona")]
        public async Task<ActionResult<Persona>> BuscarPersona()
        {
            try
            {
                int id = DesifrarToken.JwtToPayloadUserData(_accessor.HttpContext);
                if (id != 0)
                {
                    var persona = await _context.persona.FindAsync(id);
                    return Ok(persona);
                }
                else
                {
                    return BadRequest("Token invalido");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + "lll");
            }

        }
    }
}
