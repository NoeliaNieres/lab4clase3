import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { RouterModule, Routes } from '@angular/router'; 


const RUTAS_DE_NAVEGACION: Routes = [{path:'login', component:LoginComponent},{path:'', redirectTo:'/login', pathMatch:'full'}, {path:'**', component:PaginaNoEncontradaComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RUTAS_DE_NAVEGACION)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
