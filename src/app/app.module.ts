import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { NegocioComponent } from './componentes/negocio/negocio.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    EditarComponent,
    NegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
