import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoInicioComponent } from './cuerpo-inicio/cuerpo-inicio.component';
import { LoginComponent } from './login/login.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { ProductosSeleccionadosComponent } from './productos-seleccionados/productos-seleccionados.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';

const routes: Routes = [
  {path:'',component: CuerpoInicioComponent,
    children:[
      {path:'', component: PantallaPrincipalComponent},
      {path:'productoSeleccionado', component: VerProductoComponent},
      {path: 'carrito', component: ProductosSeleccionadosComponent}
    ]
  },
  {path:'Login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
