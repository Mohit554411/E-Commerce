import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { sellerSignup } from '../models/seller-signup';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit{
  sellerDetail:sellerSignup = {
    name:'',
    email:'',
    password:''
  }
  constructor(private router:Router){
    let sellerStrore = localStorage.getItem('seller');
    this.sellerDetail = sellerStrore && JSON.parse(sellerStrore)[0];
  }
  ngOnInit(): void {
    
  }
  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }
}
