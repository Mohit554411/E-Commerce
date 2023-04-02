import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuard } from './seller-auth.guard';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'seller',component:SellerAuthComponent
  },
  {
    path:'seller-home',component:SellerHomeComponent,canActivate:[SellerAuthGuard]
  },
  {
    path:'seller-details',component:SellerDetailsComponent,canActivate:[SellerAuthGuard]
  },
  {
    path:'seller-add-products',component:AddProductsComponent,canActivate:[SellerAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
