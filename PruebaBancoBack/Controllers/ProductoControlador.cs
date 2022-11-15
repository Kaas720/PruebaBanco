using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PruebaBancoBack.Helpers;
using PruebaBancoBack.Interfaces;
using PruebaBancoBack.Models;

namespace PruebaBancoBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoControlador : ControllerBase
    {
        readonly private InterfaceProducto _producto;

        public ProductoControlador(InterfaceProducto producto)
        {
            this._producto = producto;
        }
        [HttpGet("/buscarProducto")]
        public async Task<IActionResult> getTareas()
        {
            try
            {

                IEnumerable<Producto> productoList = await _producto.getProductos();
                bool vacioLista = false;
                foreach (Producto item in productoList)
                {
                    vacioLista = true;
                    break;
                }
                if (!vacioLista)
                {
                    return NotFound(
                            new Respuesta_producto
                            {
                                codigo = "404",
                                mensaje = "Producto no encontrado"
                            }
                        );
                }
                else
                {
                    return Ok(
                            new Respuesta_producto
                            {
                                codigo = "200",
                                mensaje = "Consulta exitosa",
                                producto = (List<Producto>)productoList
                            }
                        );
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpGet("/buscarProductoId/{id}")]
        public async Task<IActionResult> buscarProductoId(int id)
        {
            try
            {

               Producto producto = await _producto.getProductoId(id);
                if (producto==null)
                {
                    return NotFound(
                            new Respuesta_producto
                            {
                                codigo = "404",
                                mensaje = "Producto no encontrado"
                            }
                        );
                }
                else
                {
                    List<Producto> productoList = new List<Producto>();
                    productoList.Add(producto);
                    return Ok(
                            new Respuesta_producto
                            {
                                codigo = "200",
                                mensaje = "Consulta exitosa",
                                producto = (List<Producto>)productoList
                            }
                        );
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
