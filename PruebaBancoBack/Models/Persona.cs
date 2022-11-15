using System.ComponentModel.DataAnnotations;

namespace PruebaBancoBack.Models
{
    public class Persona
    {
        [Key]
        public int idPersona { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public string apellido { get; set; }
        [Required]
        public string direccion { get; set; }
        [Required]
        public string telefono { get; set; }
        public string estado { get; set; }
    }
}
