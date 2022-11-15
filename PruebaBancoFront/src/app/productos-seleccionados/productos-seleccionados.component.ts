import { Component, OnInit } from '@angular/core';
import { carritoService } from '../carritoService/carritoService';
import { ProductoInterface } from '../Interfaces/productoInterface';

@Component({
  selector: 'app-productos-seleccionados',
  templateUrl: './productos-seleccionados.component.html',
  styleUrls: ['./productos-seleccionados.component.css']
})
export class ProductosSeleccionadosComponent implements OnInit {

  constructor(private carrito : carritoService) { }
  producto : ProductoInterface[] = [];
  precioFinalPagar = 0;
  ngOnInit(): void {
    this.llenarCarrito();
    this.precioFinal();
  }
  llenarCarrito(){
    this.producto = this.carrito.producto;
  }
  precioFinal(){

    this.producto.forEach(product => {
      this.precioFinalPagar = this.precioFinalPagar + (product.cantidadDisponible*product.precio)
    });
  }
  Cancelar(){
    window.history.back();
  }
}
