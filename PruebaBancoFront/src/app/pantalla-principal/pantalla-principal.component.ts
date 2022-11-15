import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoInterface } from '../Interfaces/productoInterface';
import { RetornoProducto } from '../Interfaces/retornoInterfaces';
import { ProductoServiceHttpService } from '../ServiceHttp/ProductoServiceHttp.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  constructor(private productoHttp : ProductoServiceHttpService, private router : Router) { }

  producto : ProductoInterface[] = [];
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoHttp.getProducto().subscribe((data:RetornoProducto)=>{
      alert(data.codigo+"  "+data.mensaje);
      this.producto = data.producto;
    },
    (err:RetornoProducto)=>{
      alert(err.codigo+"  "+err.mensaje);
    })
  }
  dirigirseProducto(id : number){
    this.router.navigate(['/productoSeleccionado'], { queryParams: { idProducto:  id} });
  }
}
