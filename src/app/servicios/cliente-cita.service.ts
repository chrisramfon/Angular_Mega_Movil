import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ClienteCitaService {
  url = "http://localhost:3000/clientes/nuevacita";
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<String> = new EventEmitter();
  

  constructor(private http: HttpClient){}


//Manda los datos a la ruta de clientes de express
  cita(cliente){
    return this.http.post<any>(this.url,cliente);
  }


}
