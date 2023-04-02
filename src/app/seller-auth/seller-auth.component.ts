import { Component } from '@angular/core';
import { sellerSignup } from '../models/seller-signup';
import { SellerAuthService } from '../services/seller-auth.service';
import { Router } from '@angular/router';
import { sellerlogin } from '../models/seller-login';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  isUser:boolean = false;
  errorMsg :string = "";
  constructor(private sellerSignUp:SellerAuthService, private router:Router){}
  ngOnInit(){
    this.sellerSignUp.reload();
  }
  sellerSignUpDetails(data:sellerSignup){
    this.sellerSignUp.saveSellerSignUpDetails(data);
  }
  sellerloginUpDetails(data:sellerlogin){
    this.errorMsg = "";
    this.sellerSignUp.sellerloginDetails(data)
    this.sellerSignUp.isLoginError.subscribe((isError)=>{
      if(isError){
          this.errorMsg = "Email and password is not correct"
      }
    })
  }
  toggleLoginSignup(){
    this.isUser = !this.isUser;
    this.errorMsg = "";
  }
}
