import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Login, signUp } from '../data-type';
import{BehaviorSubject} from 'rxjs'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedIn= new BehaviorSubject<boolean>(false)    // authguard 
isLoginError= new EventEmitter<boolean>(false)    // authguard 
 constructor(private http:HttpClient, private router:Router) { }


  userSignUp(data:signUp){
  this.http.post('http://localhost:3000/seller',data,
   {observe:'response'}).subscribe((result)=>{
    if(result){                
    localStorage.setItem('seller',JSON.stringify(result.body))  // for add data from local storage
    this.router.navigate(['seller-home'])
  }

   })
  
  }


  reloadSeller(){
if(localStorage.getItem('seller')){
  this.isSellerLoggedIn.next(true);              //// authguard value is true so authguard is true
  this.router.navigate(['seller-home'])
}
  }

  userLogin(data:Login){
    
    console.log(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
console.log(result)

if(result && result.body && result.body.length===1){
this.isLoginError.emit(false)
  
  localStorage.setItem('seller',JSON.stringify(result.body))  // for add data from local storage
    this.router.navigate(['seller-home'])
}else{
  console.log("loginfailed")
  this.isLoginError.emit(true)
}
    })
  }
}
