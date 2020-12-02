import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  usuario = { Usuario:"", Contrasena:"" }

  constructor(private iniciosesion: InicioSesionService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.iniciosesion.login(this.usuario).subscribe(
      res=>{
        console.log(res);
        const datos = res.envio.split(",");
        localStorage.setItem('token', datos[0]);
        localStorage.setItem('Usuario', datos[1]);
        localStorage.setItem('Tipo', datos[2]);
        localStorage.setItem('id',datos[3]);

       /* localStorage.setItem('token',JSON.stringify(this.iniciosesion))*/
        alert("Bienvenido usuario: "+datos[1]);
        this.iniciosesion.sesioniniciada();x
        this.iniciosesion.tipousuario();
        this.router.navigate(['/arduino']);
        this.iniciosesion.idusuario();
        this.router.navigate(['miscitas']);
      }, err => {
        console.log(err)
        alert("Usuario o contraseña incorrecto");
      });
  }

}
