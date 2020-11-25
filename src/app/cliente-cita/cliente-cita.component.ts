import { Component, OnInit } from '@angular/core';
import {  ClienteCitaService  } from '../servicios/cliente-cita.service';

@Component({
  selector: 'app-cliente-cita',
  templateUrl: './cliente-cita.component.html',
  styleUrls: ['./cliente-cita.component.css']
})
export class ClienteCitaComponent implements OnInit{ 


  cita = {
    id_cita:"",
    Fecha_Hora:"",
    Fecha:"",
    Hora:"",
    Motivo:"",
    Estado:"Activo",
    id_Empleado:"e0",
    Matricula_Vehiculo:"",
    id:""
  }
  cita2

  constructor(private ClienteCitaService:ClienteCitaService){ }

ngOnInit(): void {
}
registrarcita(){
this.cita.id=localStorage.getItem('id');
  this.cita.Fecha_Hora=this.cita.Fecha+"T"+this.cita.Hora
  this.ClienteCitaService.registrarcita(this.cita).subscribe(res=>{
    console.log(res)
    alert("Cita Registrada")
    this.consultarcitas();
    this.limpiarcita();
     },
  err => console.log(err))
}
  consultarcitas(){
    this.cita2 = this.ClienteCitaService.getcitas();
  }
  limpiarcita(){
    this.cita.id_cita=""
    this.cita.Fecha_Hora=""
    this.cita.Motivo=""
    this.cita.Estado=""
    this.cita.id_Empleado=""
    this.cita.Matricula_Vehiculo=""

  }
}