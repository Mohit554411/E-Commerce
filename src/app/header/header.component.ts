import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { sellerSignup } from '../models/seller-signup';
import {faCartShopping,faSearch,faHome,faUser} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartIcon = faCartShopping;
  searchButton = faSearch;
  homeIcon = faHome;
  personIcon = faUser;
  menuType:string='default';
  sellerDetails:sellerSignup = {
    name:'',
    email:'',
    password:''
  }

  constructor(private router:Router){
  }
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
       if(val.url){
           if(localStorage.getItem('seller') && val.url.includes("seller")){
            this.menuType = 'seller';
            let sellerStrore = localStorage.getItem('seller');
            this.sellerDetails = sellerStrore && JSON.parse(sellerStrore)[0];
           }
           else{
            this.menuType = 'default';
           }
       }
    })
  }




}
