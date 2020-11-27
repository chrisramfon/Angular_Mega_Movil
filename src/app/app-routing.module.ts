import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';

const routes: Routes = [
  {path:'inicio', component:InicioSesionComponent},
  {path:'vehiculo', component:VehiculoComponent},
  {path:'cita', component:ClienteCitaComponent},



  //Mantener estas dos lineas al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'},
  {path:'',redirectTo:'cita',pathMatch:'full'},
  {path:'**', redirectTo:'cita',pathMatch:'full'},
  {path:'', redirectTo:'vehiculo',pathMatch:'full'},
  {path:'**', redirectTo:'vehiculo',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
