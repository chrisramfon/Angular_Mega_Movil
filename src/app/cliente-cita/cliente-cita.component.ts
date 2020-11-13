import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import {  ClienteCitaService  } from '../servicios/cliente-cita.service';

@Component({
  selector: 'app-cliente-cita',
  templateUrl: './cliente-cita.component.html',
  styleUrls: ['./cliente-cita.component.css']
})
export class ClienteCitaComponent implements OnInit {
cliente = {id:"", Fecha_Hora:"", Motivo:"", Matricula_Vehiculo:""   }
  constructor(private clientecita: ClienteCitaService, private router:Router) { }

  ngOnInit(): void {
  }
crearCita(){
this.clientecita.cita(this.cliente).subscribe(
res=>{
  console.log(res);
  const datosclientecita = res.envio.split(",");
  localStorage.setItem('token',datosclientecita[0]);
  localStorage.setItem('Fecha_Hora',datosclientecita[1]);
  localStorage.setItem('Motivo',datosclientecita[2]);
  }



)

}
}
