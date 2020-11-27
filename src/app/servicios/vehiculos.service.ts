import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = "http://localhost:3000/cliente/nuevovehiculo";

  constructor(private http: HttpClient) { }

  guardarVehiculo(vehiculo){
    return this.http.put<any>(this.url, vehiculo);
  }
}
