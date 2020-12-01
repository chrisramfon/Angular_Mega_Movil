import { Component, OnInit } from '@angular/core';
import { MisvehiculosService } from '../servicios/misvehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misvehiculos',
  templateUrl: './misvehiculos.component.html',
  styleUrls: ['./misvehiculos.component.css']
})
export class MisvehiculosComponent implements OnInit {
cliente={
    id: "", 
    Nombre: "", 
   Apellido1: "", 
    Apellido2: "", 
   Direccion: "", 
   Telefono: "", 
    Estado: "",
   Vehiculo:[{
    Matricula:"",
    Marca:"",
    Modelo:""
  }]
};
  p:number=1;



  constructor(private misvehiculosServicio:MisvehiculosService, private router:Router) { }

  ngOnInit(): void {
    this.consultarCliente();
  }

  //Elementos de owl-carousel
  title = 'owlcarouselinAngular';
  SlideOptions = { items: 1, dots: true, nav: true }; 
  //Fin de elementos owl-carousel

 //Buscar un solo cliente
 consultarCliente(){
   this.cliente.id = localStorage.getItem('id');
   this.misvehiculosServicio.consultarCliente(this.cliente).subscribe(res=>{
     this.cliente = res;
   }, err=>console.log(err));
   
  }
nuevovehiculo(){
  this.router.navigate(['vehiculo'])
}
consultarMisvehiculos(){
this.router.navigate(['misvehiculos'])
}
}