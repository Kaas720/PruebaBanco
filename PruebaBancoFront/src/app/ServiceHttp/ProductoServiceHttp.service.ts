import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoInterface } from '../Interfaces/productoInterface';
import { RetornoProducto } from '../Interfaces/retornoInterfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceHttpService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'buscarProducto';
  private urlProductoID: string = 'buscarProductoId';
  getProducto(): Observable<RetornoProducto>{
    return this.http.get<RetornoProducto>(this.urlhost + this.urlApi);
  }
  getProductoId(id:number): Observable<RetornoProducto>{
    return this.http.get<RetornoProducto>(this.urlhost + this.urlProductoID+"/"+id);
  }

}
