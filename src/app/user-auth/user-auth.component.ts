import { Component } from '@angular/core';
import { Login, signUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
showlogin:boolean=true;

  constructor(private user:UserService){}
  ngOnInit():void{
    this.user.userauthreload();
  }
signUp(data:signUp){
this.user.userSignUp(data);
}

login(data:Login){
this.user.userLoigIn(data);

}

openSignup(){
this.showlogin=false;
}

openLogin(){
this.showlogin=true;
}
}
