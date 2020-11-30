//Librerias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';

//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { SensorComponent } from './sensor/sensor.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';
import { MiscitasComponent } from './miscitas/miscitas.component';

//Servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import {SensordistanciaService} from './servicios/sensordistancia.service'
import { VehiculosService } from './servicios/vehiculos.service';
import { ClienteCitaService } from './servicios/cliente-cita.service';
import { MiscitasService } from './servicios/miscitas.service';


@NgModule({

  declarations: [
    AppComponent,
    InicioSesionComponent,
    MenuComponent,
    VehiculoComponent,
    MiscitasComponent,
    SensorComponent,
    ClienteCitaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    OwlModule
  ],

  providers: [
    InicioSesionService,
    SensordistanciaService,
    VehiculosService,
    ClienteCitaService,
    MiscitasService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
