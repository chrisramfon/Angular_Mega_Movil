import { Component, OnInit } from '@angular/core';
import { EditarinfoClienteService } from '../servicios/editarinfo-cliente.service';

@Component({
  selector: 'app-mi-info-cliente',
  templateUrl: './mi-info-cliente.component.html',
  styleUrls: ['./mi-info-cliente.component.css']
})
export class MiInfoClienteComponent implements OnInit {
  usuarios;
  cliente={
  id:"",
  Nombre:"",
  Apellido1:"",
  Apellido2:"",
  Direccion:"",
  Telefono:"",
  Estado:""
}
usuario={
  id:"",
  Usuario:"",
  Contrasena:"",
  Tipo:"C"
}

  constructor(private EditarinfoClienteService :EditarinfoClienteService ) { }

  ngOnInit(): void {
    this.consultarMiInfo();
  }
  modificarInfocli(){
    this.cliente.id=localStorage.getItem('id');
    this.EditarinfoClienteService.modificarInfocli(this.cliente).subscribe(res =>{
      alert("Datos personales modificados exitosamente")
      
    },
    err => console.log(err)
    )
  }
  consultarMiInfo(){
  this.cliente.id=localStorage.getItem('id');
  this.EditarinfoClienteService.consultarMiInfo(this.cliente).subscribe(res =>{
    this.cliente=res;
  },err=>console.log(err));
  }

}
