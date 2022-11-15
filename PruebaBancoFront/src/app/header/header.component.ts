import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../ServiceHttp/InicioSesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombreCliente = false;
  clienteNombre = ""
  constructor(private inicioSesionHttp : InicioSesionService) { }
  
  ngOnInit(): void {
    this.obtenerPersona();
  }
  obtenerPersona(){
    this.inicioSesionHttp.getPersona().subscribe(data=>{
      this.nombreCliente = true;
      this.clienteNombre = data.nombre+" "+data.apellido
    },
    )
  }
}
