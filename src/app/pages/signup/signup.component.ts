import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  //age calculation

  public user_dobb : any ={};
   public age: any ={};
   public ageType : any ={};
 // user_serviceobj: any;
   //inject user service object
  constructor(private userserviceservice : UserServiceService , private snack:MatSnackBar) { 
    
  }

  ngOnInit(): void {
  }

   //biding data using object 
   public user={
    user_name: '',
    user_insurance_type: '',
    user_age : 0, // this.calculateAge(this.user_dobb.name) ,
    user_insurance_money : 0 ,
    user_password :''
    
  };
 //age


   //declaring form submit 
   formSubmit():void{
   
    if(this.user.user_name=="" || this.user.user_insurance_type==null || this.user.user_insurance_money ==null || this.user.user_password==null){
    
  //  alert("Please fill all the fields !");
    this.snack.open("please fill all the fields " , "Close");
    return;
    }
    else{ 
      this.user.user_age= this.calculateAge(this.user_dobb);
      
            this.userserviceservice.addUser(this.user).subscribe(
              (data:any) =>{
                //sucess
                this.snack.open("Submit sucesfully! " , "Ok")
                   },
              (error:any) => {
                //error 
                console.log(error);
                alert("something went wrong :(");
              },
             
            );
            //function on sucess , func on error 
    

         }
  }


public calculateAge( value : any): number{
  
 let birth_date = new Date(this.user_dobb).getFullYear(); // today date
 let today =  new Date().getFullYear(); 
 let age =  (today-birth_date);

 this.user.user_age= age;
 console.log(age);
 return age;

}

//clear form 
onClear(): void{

}
}
