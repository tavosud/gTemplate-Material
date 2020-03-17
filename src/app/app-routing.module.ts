import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admtemplate/login/login.component';
import { ContainerComponent } from './admtemplate/container/container.component';
import { DashboardComponent } from './admtemplate/dashboard/dashboard.component';
import { FormsComponent } from './admtemplate/forms/forms.component';


const routes: Routes = [
  { path : '', redirectTo : 'admtemplate/dashboard', pathMatch : 'full' },
  { path : 'login', component: LoginComponent },
  { path: 'admtemplate', component: ContainerComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forms', component: FormsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
