import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';
import { MiscitasComponent } from './miscitas/miscitas.component';
import { MisvehiculosComponent } from './misvehiculos/misvehiculos.component';

const routes: Routes = [
  {path:'inicio', component:InicioSesionComponent},
  {path:'cita', component:ClienteCitaComponent},
  {path:'vehiculo', component:VehiculoComponent},
  {path:'miscitas', component:MiscitasComponent},
  {path:'misvehiculos', component:MisvehiculosComponent},
  
  //Mantener estas dos lineas al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'},
  {path:'',redirectTo:'cita',pathMatch:'full'},
  {path:'**', redirectTo:'cita',pathMatch:'full'},
  {path:'', redirectTo:'vehiculo',pathMatch:'full'},
  {path:'**', redirectTo:'vehiculo',pathMatch:'full'},
  {path:'',redirectTo:'miscitas', pathMatch:'full'},
  {path:'**', redirectTo:'miscitas', pathMatch:'full'},
  {path:'',redirectTo:'misvehiculos', pathMatch:'full'},
  {path:'**', redirectTo:'misvehiculos', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
