import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensordistanciaService {
  private urlsensor="http://localhost:3000/arduino"
  constructor(private http:HttpClient) { }

  verdistancia(){
    return this.http.get<any>(this.urlsensor+"/verdistancia")
  }

  registrardistancia(distancia){ 
    return this.http.post<any>(this.urlsensor,distancia)
  }

  todasdistancias(){
    return this.http.get<any>(this.urlsensor)
  }
}
