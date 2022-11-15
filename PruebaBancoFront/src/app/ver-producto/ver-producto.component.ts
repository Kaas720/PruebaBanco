import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carritoService } from '../carritoService/carritoService';
import { ProductoInterface } from '../Interfaces/productoInterface';
import { RetornoProducto } from '../Interfaces/retornoInterfaces';
import { ProductoServiceHttpService } from '../ServiceHttp/ProductoServiceHttp.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  id: number = 0;
  producto! : ProductoInterface;
  constructor(private router: ActivatedRoute, private productoHttp: ProductoServiceHttpService, private productoService : carritoService) { 
    this.id = Number(this.router.snapshot.queryParamMap.get('idProducto'));
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  regresar(){
    window.history.back();
  }
  obtenerProductos(){
    this.productoHttp.getProductoId(this.id).subscribe((data:RetornoProducto)=>{
      alert(data.codigo+ "  "+ data.mensaje);
      this.producto = data.producto[0];
    },
    err=>{
      alert("Producto  no encontrado");
    })
  }
  agregarCarrito(){
    let ProductoCopia : ProductoInterface = {
      idProducto : this.producto.idProducto,
      detalleProducto: this.producto.detalleProducto,
      descripcionProducto: this.producto.descripcionProducto,
      urlImagen : this.producto.urlImagen,
      precio : this.producto.precio,
      cantidadDisponible : 1
    }
    this.productoService.agregar_producto_carrito(ProductoCopia);
    this.disminuirProducto();
  }
  disminuirProducto(){
    this.producto.cantidadDisponible = this.producto.cantidadDisponible -1;
  }
}
