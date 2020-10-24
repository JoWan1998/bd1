import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {MainComponent} from './components/main/main.component';
import {DashComponent} from './components/dash/dash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'main/:Id', component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Dashboard' },
      {path: 'Dashboard', component: DashComponent},
      { path: '404', component: NotfoundComponent},
      { path: '**', redirectTo: '404'}
    ]},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
