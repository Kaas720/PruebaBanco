using System.ComponentModel.DataAnnotations;

namespace PruebaBancoBack.Models
{
    public class Producto
    {
        [Key]
        public int idProducto { get; set; }
        [Required]
        public string detalleProducto { get; set; }
        [Required]
        public string descripcionProducto { get; set; }
        [Required]
        public string urlImagen { get; set; }
        [Required]
        public double precio { get; set; }
        [Required]
        public int cantidadDisponible { get; set; }
        public string estado { get; set; }
    }
}
