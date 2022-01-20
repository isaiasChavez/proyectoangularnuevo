import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfesorComponent } from './components/profesor/profesor.component'
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
const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
    {
    path: 'generales/:idProfesor',
    component: GeneralesComponent,
    },
    {
      path: 'articulos/:idProfesor',
      component: ArticulosComponent,
      },
      
    ]
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
