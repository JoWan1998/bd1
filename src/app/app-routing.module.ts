import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {MainComponent} from './components/main/main.component';
import {DashComponent} from './components/dash/dash.component';
import {ConsultasComponent} from './components/consultas/consultas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', data: {breadcrumb: null}, component: LogInComponent },
  { path: 'Menu', data: {breadcrumb: 'Home'}, component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', data: {breadcrumb: null}, redirectTo: 'Dashboard' },
      { path: 'Dashboard', data: {breadcrumb: 'Dashboard'}, component: DashComponent},
      { path: 'Consultas', data: {breadcrumb: 'Consultas'}, component: ConsultasComponent},
      { path: '404', data: {breadcrumb: null}, component: NotfoundComponent},
      { path: '**', data: {breadcrumb: null}, redirectTo: '404'}
    ]},
  { path: '404', data: {breadcrumb: null}, component: NotfoundComponent},
  { path: '**', data: {breadcrumb: null}, redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
