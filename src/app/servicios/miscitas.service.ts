import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiscitasService {
  private url="http://192.168.1.71:3000/cliente"

  constructor(private http: HttpClient) { }

  //Consultar un solo cliente
  consultarCliente(cliente){ 
    return this.http.get<any>(this.url+"/"+cliente.id);
   }
}
