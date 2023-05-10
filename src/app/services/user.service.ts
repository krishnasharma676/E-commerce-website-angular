import { Injectable } from '@angular/core';
import { Login, signUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(user:signUp){
  this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((result)=>{
console.log(result)
if(result){
  localStorage.setItem('user',JSON.stringify(result.body))
  this.router.navigate(['/'])
}
  })

  }
  userauthreload(){
    if(localStorage.getItem('user')){
      this.router.navigate([''])
    }
  }
userLoigIn(data:Login){
 this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result)=>{
if(result && result.body && result.body.length===1){
  console.log('data',result)
  localStorage.setItem('user',JSON.stringify(result.body[0]));
  this.router.navigate([''])
}
 })
}

}
