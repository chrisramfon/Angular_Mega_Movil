import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ClienteCitaService {

 private UrlMisCitas= "http://192.168.1.71:3000/cliente/";
 private url = "http://localhost:3000/cliente/nuevacita";

  constructor(private http: HttpClient){}


//Manda los datos a la ruta de clientes de express
  registrarcita(cliente){
    return this.http.put<any>(this.url,cliente);
  }
  
/*Obtener los datos de la ruta de express, con el get*/
getcitas(){
  return this.http.get<any>(this.UrlMisCitas)
}

//buscar al cliente conectado
consultarCliente(cliente){
  return this.http.get<any>(this.UrlMisCitas+"/"+cliente.id);
}

}
