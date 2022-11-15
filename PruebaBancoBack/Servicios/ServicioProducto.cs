using Microsoft.EntityFrameworkCore;
using PruebaBancoBack.Data;
using PruebaBancoBack.Interfaces;
using PruebaBancoBack.Models;

namespace PruebaBancoBack.Servicios
{
    public class ServicioProducto : InterfaceProducto
    {
        private readonly DataContext _context;

        public ServicioProducto(DataContext context)
        {
            _context = context;
        }

        public async Task<Producto> getProductoId(int id)
        {
            try
            {
                Producto producto = await _context.producto.FindAsync(id);
                return producto;
            }
            catch (Exception ex)
            {
                throw new Exception("Fallo del servidor => " + ex.Message);
            }
        }

        public async Task<IEnumerable<Producto>> getProductos()
        {
            try
            {
                var ProductoList = await _context.producto.ToListAsync();
                return ProductoList;
            }
            catch (Exception ex)
            {
                throw new Exception("Fallo del servidor => " + ex.Message);
            }
            
        }
    }
}
