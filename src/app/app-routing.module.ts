import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuardiaLoginGuard} from './guardia-login.guard';
import {GuardiaTipousuGuard} from './guardia-tipousu.guard';
import {TipusuGuard} from './tipusu.guard';


//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import {SensorComponent} from './sensor/sensor.component';
import {VehiculoComponent} from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';
import { MiscitasComponent } from './miscitas/miscitas.component';

const routes: Routes = [
  {path:'inicio', component:InicioSesionComponent},
  {path:'cita', component:ClienteCitaComponent},
  {path:'miscitas', component:MiscitasComponent},
  {path:'vehiculo',component:VehiculoComponent, canActivate:[GuardiaLoginGuard, TipusuGuard]},
  {path:'arduino', component:SensorComponent, canActivate:[GuardiaLoginGuard,GuardiaTipousuGuard]},
  //Mantener estas dos lineas al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
