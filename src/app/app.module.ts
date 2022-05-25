import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importación Modulo de Rutas
import { RouterModule } from '@angular/router';

//Importación modulo de formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Importación de cada Componente
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    FooterComponent,
    LoginComponent,
    MenuPrincipalComponent
  ],
  // Acá se cargan los modulos importados que se usarán en el proyecto.
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'encabezado', component: EncabezadoComponent},
      {path: '', redirectTo: '/encabezado', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
