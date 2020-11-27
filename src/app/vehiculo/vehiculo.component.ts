import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculo = {Matricula: "", Marca: "", Modelo: "", id: ""};

  constructor(private vehiculoServicio: VehiculosService) { }

  ngOnInit(): void {
  }


  //Inicio de guardar vehículo
  guardarVehiculo(){
    this.vehiculo.id=localStorage.getItem('id');
    this.vehiculoServicio.guardarVehiculo(this.vehiculo).subscribe(res=>{
      alert("Vehículo guardado con éxito.");
    });//Fin de guardar vehiculo
  }
}
