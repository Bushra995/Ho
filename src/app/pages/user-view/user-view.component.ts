
import { UserServiceService } from 'src/app/services/user-service.service';
import { UITKTableDataSource } from '@uitk/angular';
import {MatDialog, MatDialogClose, MatDialogConfig} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { UserModule } from 'src/app/model/user/user.module';

import { Component, NgModule, OnInit } from '@angular/core';
import { UITKTableModule } from '@uitk/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  //arry for storing data
  userArray = null;
 //user detailss



users : UserModule[] =[];

 public user={
  user_name: '',
  user_insurance_type: '',
  user_age : 0, // this.calculateAge(this.user_dobb.name) ,
  user_insurance_money : 0 ,
  user_password :''
  
};
//age
tableHeader = ['Id', 'Name', 'Age', 'Insurance Type', 'Insurance Amount' , 'Edit' , 'Delete'];

 

  constructor(private userserviceservice : UserServiceService , public dialog: MatDialog) { }


//
dataSource= new UITKTableDataSource<UserModule>([]);

  ngOnInit() {
    this.userserviceservice.getAllUser().subscribe((list: any) => {
      this.dataSource.data=list;
      console.log(this.dataSource.data);
    } );
   
}
  //get all use

  getUser():void{ 

  }


  //get user details
  //wheneve we get data we will store inthis aary
  getUserDetails(): void{
    this.userserviceservice.getAllUser().subscribe(
    (data:any) =>{
      //sucess
      this.userArray = data;
    
    },
    (error:any) => {
      //error 
      console.log(error);
      // alert("something went wrong :("); 
    },
    );
  }

  //deleting user 
  deleteUser(userid: any): void{
    this.userserviceservice.deleteUserById(userid).subscribe(
      (data:any) =>{
        //sucess
        this.dataSource.data = data;
      
      },
      (error:any) => {
        //error 
        console.log(error);
      //  alert("something went wrong :("); 
      },
    );
  }

  //edit user by id
  EditUser(userid : any): void{
    this.userserviceservice.EditUserById(userid).subscribe(
      (data:any) =>{
        //sucess
        
      
      },
      (error:any) => {
        //error 
        console.log(error);
        alert("something went wrong :("); 
      },
    );
  }




  //form submit

  

  //for dialog create user 
 
  openDialog(): void {
  
    // const dialogRef = this.dialog.open(DialogContentExampleDialog);
    const dialogConfig = new MatDialogConfig();
    
          dialogConfig.autoFocus=true;
          dialogConfig.width = '700px';
         dialogConfig.height = '600px';
    // dialogConfig.height= "50%";
     const dialogRef = this.dialog.open(SignupComponent,dialogConfig);
     dialogConfig.scrollStrategy;
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
    
  }

  //on ediy
  onEdit(user : any){
    //  //on edit buton form should be pre fille 
    //  this.userserviceservice.populate(user);
  }



}


//retriing all data from user array and binding it to html element 
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}