import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credenciales } from '../Interfaces/Credenciales';
import { Persona } from '../Interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'api/Login/Login';
  private BuscarPersona: string = 'BuscarPersona';
  getUsuario(credenciales : Credenciales){
    return this.http.post(this.urlhost+this.urlApi,credenciales);
  }
  getPersona() : Observable<Persona>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.get<Persona>(this.urlhost + this.BuscarPersona,{headers: header});
  }
}
