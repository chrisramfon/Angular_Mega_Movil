import { Component, OnInit } from '@angular/core';
import {SensordistanciaService} from '../servicios/sensordistancia.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
distancias;
tabla;
  distancia={
    valor:"",
    fecha:"",
    hora:""
  }

  p: number = 1;
  
  constructor(private distanciaServicio:SensordistanciaService) { }

  ngOnInit(): void {
    this.verdistancia()
  }

    //Elementos de owl-carousel
   title = 'owlcarouselinAngular';
   SlideOptions = { items: 1, dots: true, nav: true }; 
   //Fin de elementos owl-carousel

  verdistancia(){
    this.distanciaServicio.verdistancia()
    .subscribe(res=>{
      this.distancia.valor=res.valor
       let ahora=new Date();
    ahora.setTime(ahora.getTime()-60000*60*6 )
    let hoy= ahora.toISOString()
    this.distancia.fecha=hoy.substring(0,10)
    this.distancia.hora=hoy.substring(11,19)
    },err=>{
      console.log(err)
    })
  }

  registrardistancia(){
    this.distancia.fecha+="T"+this.distancia.hora
    this.distanciaServicio.registrardistancia(this.distancia)
    .subscribe(res=>{
        alert("Distancia registrada")
    },err=>{

    })
  }

  todasdistancias(){
    this.distancias=this.distanciaServicio.todasdistancias()
    this.tabla = true;
  }
}
