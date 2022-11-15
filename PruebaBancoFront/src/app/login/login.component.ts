import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciales } from '../Interfaces/Credenciales';
import { InicioSesionService } from '../ServiceHttp/InicioSesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private servicio:InicioSesionService) { }

  ngOnInit() {
  }
  usuarioLogin = new FormGroup({
    correo: new FormControl('',Validators.required),
    paasword: new FormControl('', Validators.required)
  })
  onSubmit(){
    let usuario = String(this.usuarioLogin.value.correo);
    let password = String(this.usuarioLogin.value.paasword);
    if(this.validarEntradas(usuario,password)){
      this.inicioSession();
    }
    else{
      alert("Campos invalidos!!");
    }
  }
  inicioSession(){
    this.servicio.getUsuario(this.usuarioLogin.value as Credenciales).subscribe((data : any)=>{
      localStorage.setItem('token_value',data)
      this.router.navigate(['']);
    },
    (errorData)=>{
      alert("Usuario no registrado");
    });
    
  }
  validarEntradas(correo:string , password:string){
    if(correo == null  || password == null)
      return false;
    else
      return true;
  }
}
