import { Component } from '@angular/core';
import { productsDetails } from '../models/productsDetails';
import { AddProductsService } from '../services/add-products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  addProductMsg:boolean = false;
  constructor(private addProductService:AddProductsService){}

  addProduct(data:productsDetails){
     this.addProductService.addProductsDetails(data).subscribe((result)=>{
       if(result){
          this.addProductMsg = true
       }
       setTimeout(()=> (this.addProductMsg = false),1000);
     })
  }
}
