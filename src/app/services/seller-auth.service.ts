import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { sellerSignup } from '../models/seller-signup';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { sellerlogin } from '../models/seller-login';
@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
  isSellerLogeedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter(false);
  constructor(private http:HttpClient, private router:Router)  { } 

  saveSellerSignUpDetails(data:sellerSignup){
    this.http.post("http://localhost:3000/sellerDetails",data,{observe:'response'}).subscribe((result)=>{
      this.isSellerLogeedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    });
  }
  reload(){
    if(localStorage.getItem('seller')){
      this.isSellerLogeedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  sellerloginDetails(data:sellerlogin){
    this.http.get(`http://localhost:3000/sellerDetails?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
      // this.isSellerLogeedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      }
      else{
         this.isLoginError.emit(true)
      }
    });
  }
}
