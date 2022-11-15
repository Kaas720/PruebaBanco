using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PruebaBancoBack.Models
{
    public class Credenciales
    {
        [Key]
        public int idCredenciales { get; set; }
        [ForeignKey("Persona")]
        public int idPersona { get; set; }
        [Required]
        public string correo { get; set; }
        [Required]
        public string passwordUser { get; set; }
        public string estado { get; set; }
    }
}
