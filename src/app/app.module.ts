import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './components/navigation/navigation.component';
import { GeneralesComponent } from './components/generales/generales.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { InstitutosComponent } from './components/institutos/institutos.component';
import { MateriaComponent } from './components/materia/materia.component';
import { PeriodoComponent } from './components/periodo/periodo.component';
import { PlanesComponent } from './components/planes/planes.component';
import { ProfesorYMateriaComponent } from './components/profesor-ymateria/profesor-ymateria.component';
import { TipoProfesorComponent } from './components/tipo-profesor/tipo-profesor.component';
import { HomeComponent } from './components/home/home.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfesorComponent,
    NavigationComponent,
    GeneralesComponent,
    CarrerasComponent,
    InstitutosComponent,
    MateriaComponent,
    PeriodoComponent,
    PlanesComponent,
    ProfesorYMateriaComponent,
    TipoProfesorComponent,
    HomeComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
