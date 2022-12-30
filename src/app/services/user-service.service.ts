import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModule } from '../model/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //dependency injection :callign backend through http service 
  constructor(private http: HttpClient) { }
  //adding user
  public addUser(user: any) {//doctor is of any type(object)
    //calling http client class  //passing url with data for adding user 
    return this.http.post('http://localhost:8080/user/create/', user); //(url:for post request  , data :dctor)//post mapping url of user
    //dynamic value for base ur;l
  }
  //get user by id 
  public getUser(userid: any) {
    return this.http.get<UserModule>(`http://localhost:8080/user/${userid}`);
  }
  //get all user //UserModule 
  public getAllUser() {
    return this.http.get<UserModule[]>('http://localhost:8080/user/users');

  }
  //DELTE ALL USER
  public deleteUserById(userid:any) {

    return this.http.delete(`http://localhost:8080/user/${userid}`);

  }
  //edit user by id 
  public  EditUserById( userid: any ) {
    return this.http.put(`http://localhost:8080/user/${userid}` , {});
  }
  public populate(user: any){
    return this.http.get(`http://localhost:8080/user/${user.userid}`);
  }
  
}
//localhost:8080/user/FindDoctorForUser/7/500