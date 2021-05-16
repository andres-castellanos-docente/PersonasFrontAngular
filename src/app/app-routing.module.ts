import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonasComponent} from './formas/personas/personas.component';
import {HomeComponent} from './formas/home/home.component';

const routes: Routes = [
  {path: 'personas',  component: PersonasComponent, canActivate: []},
  {path: 'home',  component: HomeComponent, canActivate: []},
  {path: '',  component: PersonasComponent, canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
