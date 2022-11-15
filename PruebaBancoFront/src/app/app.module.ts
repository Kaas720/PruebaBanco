import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoInicioComponent } from './cuerpo-inicio/cuerpo-inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { HttpClientModule } from '@angular/common/http';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { carritoService } from './carritoService/carritoService';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ProductosSeleccionadosComponent } from './productos-seleccionados/productos-seleccionados.component'
@NgModule({
  declarations: [
    AppComponent,
    CuerpoInicioComponent,
    HeaderComponent,
    FooterComponent,
    PantallaPrincipalComponent,
    VerProductoComponent,
    LoginComponent,
    ProductosSeleccionadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [carritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
