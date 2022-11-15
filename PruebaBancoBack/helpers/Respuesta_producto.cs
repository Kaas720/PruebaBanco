using PruebaBancoBack.Models;

namespace PruebaBancoBack.Helpers
{
    public class Respuesta_producto
    {
        public string codigo { get; set; }
        public string mensaje { get; set; }
        public List<Producto> producto { get; set; }
    }
}
