import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './components/hardysoft/edit-habilidad.component';
import { NewHabilidadComponent } from './components/hardysoft/new-habilidad.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'nuevahabilidad', component: NewHabilidadComponent},
  {path: 'edithabilidad/:id', component: EditHabilidadComponent},
  {path: 'editacercade/:id', component: EditacercadeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
