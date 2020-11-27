import { Component, OnInit } from '@angular/core';
import { MiscitasService } from '../servicios/miscitas.service';

@Component({
  selector: 'app-miscitas',
  templateUrl: './miscitas.component.html',
  styleUrls: ['./miscitas.component.css']
})
export class MiscitasComponent implements OnInit {
  cliente = {id: "", Nombre: "", Apellido1: "", Apellido2: "", Direccion: "", Telefono: "", Estado: "",
Cita:[{
  id_cita: "", Fecha_Hora: "", Motivo: "", Estado: "", id_Empleado: "", Matricula_Vehiculo: "" 
}] };
  constructor(private citasServicio: MiscitasService) { }

  ngOnInit(): void {
    this.consultarCliente();
  }

//Buscar un solo cliente
consultarCliente(){
 this.cliente.id = localStorage.getItem('id');
  this.citasServicio.consultarCliente(this.cliente).subscribe(res=>{
    this.cliente = res;
  }, err=>console.log(err));
  }//Fin de consultar cliente

}
