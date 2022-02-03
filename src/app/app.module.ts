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
import { AdminComponent } from './admin/admin.component';
import { AddNegocioComponent } from './admin/forms/add-negocio/add-negocio.component';
import { UpdateNegocioComponent } from './admin/forms/update-negocio/update-negocio.component';
import { FormComponent } from './admin/forms/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    EditarComponent,
    NegocioComponent,
    AdminComponent,
    AddNegocioComponent,
    UpdateNegocioComponent,
    FormComponent
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
