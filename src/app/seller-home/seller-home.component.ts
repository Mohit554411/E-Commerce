import { Component, OnInit } from '@angular/core';
import { AddProductsService } from '../services/add-products.service';
import { productsDetails } from '../models/productsDetails';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productsDetails:productsDetails[]|undefined ;
   constructor(private addProductService:AddProductsService){}
  ngOnInit(): void {
    this.addProductService.getProductsDetails().subscribe((result)=>{
      this.productsDetails = result;
    })
  }

}
