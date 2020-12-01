import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';
import { MiscitasComponent } from './miscitas/miscitas.component';
import { MisvehiculosComponent } from './misvehiculos/misvehiculos.component';
import { MiInfoClienteComponent } from './mi-info-cliente/mi-info-cliente.component';

const routes: Routes = [
  {path:'inicio', component:InicioSesionComponent},
  {path:'cita', component:ClienteCitaComponent},
  {path:'vehiculo', component:VehiculoComponent},
  {path:'miscitas', component:MiscitasComponent},
  {path:'misvehiculos', component:MisvehiculosComponent},
  {path:'miinfocliente', component:MiInfoClienteComponent},
  
  //Mantener estas dos lineas al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
