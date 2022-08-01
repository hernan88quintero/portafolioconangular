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
import { RegistroFormComponent } from './componentes/registro-form/registro-form.component';
import { ProgressComponent } from './componentes/progress/progress.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

// Importación del SERVICIO
import { ServiceService } from './service/service.service';

//Importación del CLIENTE HTTPS
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    FooterComponent,
    LoginComponent,
    MenuPrincipalComponent,
    RegistroFormComponent,
    ProgressComponent,
    ProyectoComponent
  ],
  // Acá se cargan los modulos importados que se usarán en el proyecto.
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'encabezado', component: EncabezadoComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroFormComponent},
      {path: '', redirectTo: '/encabezado', pathMatch: 'full'}
    ]),
    HttpClientModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
