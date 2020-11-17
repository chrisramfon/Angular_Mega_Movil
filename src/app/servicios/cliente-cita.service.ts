import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ClienteCitaService {
 private url = "http://localhost:3000/clientes/nuevacita";
  

 private UrlMisCitas= "http://localhost:3000/clientes/"

  constructor(private http: HttpClient){}


//Manda los datos a la ruta de clientes de express
  registrarcita(cliente){
    return this.http.post<any>(this.url,cliente);
  }
  
/*Obtener los datos de la ruta de express, con el get*/
getcitas(){
  return this.http.get<any>(this.UrlMisCitas)
}

}
