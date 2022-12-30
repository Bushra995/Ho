import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HospitalComponent } from 'src/app/pages/hospital/hospital.component';
import { UserViewComponent } from 'src/app/pages/user-view/user-view.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { UITKNavigationModule } from '@uitk/angular';
import { Subject } from 'rxjs';
//import home compontn
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  
  constructor() { }
  navigationTypeHorizontal!: string;

  ngOnInit(): void {
   
  }

 



    //declartion
    public themeSubject!: Subject<string>;
    public currentTheme!: string;


    //constrcutpr
    
}
