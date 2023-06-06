import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { RegistrarPersonaComponent } from './components/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './components/editar-persona/editar-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { TotalpromedioComponent } from './components/totalpromedio/totalpromedio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    RegistrarPersonaComponent,
    EditarPersonaComponent,
    ListadoPersonaComponent,
    TotalpromedioComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
