import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {path: 'signup' , component :SignupComponent , pathMatch : 'full'} ,
  { path: 'login' , component : LoginComponent , pathMatch : 'full'},
  { path: 'hospital' , component : HospitalComponent, pathMatch : 'full'},
  {path : 'view' , component : UserViewComponent , pathMatch :'full'},
  {path :'home' , component :HomeComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
