import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import {SensorComponent} from './sensor/sensor.component';
import {VehiculoComponent} from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';

//Guardias 
import {GuardiaLoginGuard} from './guardia-login.guard';
import {GuardiaTipousuGuard} from './guardia-tipousu.guard';
import {TipusuGuard} from './tipusu.guard';

const routes: Routes = [
  {path:'inicio', component:InicioSesionComponent},
  {path:'vehiculo',component:VehiculoComponent, canActivate:[GuardiaLoginGuard, TipusuGuard]},
  {path:'arduino', component:SensorComponent, canActivate:[GuardiaLoginGuard,GuardiaTipousuGuard]},
  {path:'nuevacita', component:ClienteCitaComponent, canActivate:[GuardiaLoginGuard, TipusuGuard]},
  //Mantener estas dos lineas al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
