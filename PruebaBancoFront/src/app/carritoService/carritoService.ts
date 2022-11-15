import { ProductoInterface } from "../Interfaces/productoInterface";

export class carritoService {
    producto : ProductoInterface[] = [];
    agregar_producto_carrito(producto : ProductoInterface){
        if(!this.verificar_producto_igual(producto)){
            this.producto.push(producto);
        }
        
    }
    verificar_producto_igual(productos : ProductoInterface){
        for(let i = 0; i < this.producto.length; i++){
            if(productos.descripcionProducto == this.producto[i].descripcionProducto){
                this.producto[i].cantidadDisponible = this.producto[i].cantidadDisponible+productos.cantidadDisponible;
                return true;
            }
        }
        return false;
    }
    vaciarCarrito(){
        this.producto.splice(0, this.producto.length);
    }
}