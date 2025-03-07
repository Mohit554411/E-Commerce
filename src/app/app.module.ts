import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { BeerComponent } from './category/beer/beer.component';
import { WhiskeyComponent } from './category/whiskey/whiskey.component';
import { RumComponent } from './category/rum/rum.component';
import { VodkaComponent } from './category/vodka/vodka.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerDetailsComponent,
    AddProductsComponent,
    FooterComponent,
    BeerComponent,
    WhiskeyComponent,
    RumComponent,
    VodkaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
