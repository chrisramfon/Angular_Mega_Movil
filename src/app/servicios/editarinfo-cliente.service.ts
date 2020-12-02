import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class EditarinfoClienteService {
  private urlMiInfo ="http://localhost:3000/cliente"
  constructor(private http: HttpClient) {}


consultarMiInfo(cliente){
  return this.http.get<any>(this.urlMiInfo+"/"+cliente.id);
}
modificarInfocli(cliente){
  return this.http.put<any>(this.urlMiInfo,cliente);
}


}
