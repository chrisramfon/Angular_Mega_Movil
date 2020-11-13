//Librerias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
//Servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ClienteCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InicioSesionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
