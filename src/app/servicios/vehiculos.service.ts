import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = "http://192.168.1.71:3000/cliente/nuevovehiculo";

  constructor(private http: HttpClient) { }

  guardarVehiculo(vehiculo){
    return this.http.put<any>(this.url,vehiculo);
  }
} 
