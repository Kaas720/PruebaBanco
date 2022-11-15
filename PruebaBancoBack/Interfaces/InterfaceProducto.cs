using PruebaBancoBack.Models;

namespace PruebaBancoBack.Interfaces
{
    public interface InterfaceProducto
    {
        public Task<IEnumerable<Producto>> getProductos();
        public Task<Producto> getProductoId(int id);
    }
}
