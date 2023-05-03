import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  showLogin = false;
  AuthError: string = ''; //toggle switch properfu in signup ans signin page
  constructor(private seller: SellerService) {}
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: signUp): void {
    if(data != null){
    this.seller.userSignUp(data);
    }
  }
  login(data: signUp) {
    this.AuthError = '';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.AuthError = 'Email And Password Does Not Match';
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
