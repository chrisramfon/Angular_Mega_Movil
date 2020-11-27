//Librerias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';

//Servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { VehiculosService } from './servicios/vehiculos.service';
import { ClienteCitaService } from './servicios/cliente-cita.service';

@NgModule({

  declarations: [
    AppComponent,
    InicioSesionComponent,
    MenuComponent,
    VehiculoComponent,
    ClienteCitaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],

  providers: [
    InicioSesionService,
    VehiculosService,
    ClienteCitaService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
