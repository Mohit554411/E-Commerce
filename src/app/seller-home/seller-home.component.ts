import { Component, OnInit } from '@angular/core';
import { AddProductsService } from '../services/add-products.service';
import { productsDetails } from '../models/productsDetails';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productsDetails:productsDetails[]|undefined ;
  deleteIcon = faTrash;
  EditIcon = faEdit;
   constructor(private addProductService:AddProductsService){}
  ngOnInit(): void {
   this.reloadProduct();
  }
  deleteProduct(id:number){
     this.addProductService.deleteProductDetails(id).subscribe((result)=>{
       if(result){
        this.reloadProduct();
       }
     })
  }
  reloadProduct(){
      this.addProductService.getProductsDetails().subscribe((result)=>{
      this.productsDetails = result;
    })
  }

}
