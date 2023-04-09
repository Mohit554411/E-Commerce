import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsDetails } from '../models/productsDetails';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {

  constructor(private http:HttpClient) { }

  addProductsDetails(data:productsDetails){
    return this.http.post("http://localhost:3000/productDetails",data);
  }
  getProductsDetails(){
    return this.http.get<productsDetails[]>("http://localhost:3000/productDetails");
  }
  deleteProductDetails(id:number){
    return this.http.delete(`http://localhost:3000/productDetails/${id}`);
  }
}
