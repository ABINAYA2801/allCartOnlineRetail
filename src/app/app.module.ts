import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SuccessComponent } from './success/success.component';
import { OrderFailureComponent } from './order-failure/order-failure.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatLabel } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    SuccessComponent,
    OrderFailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatLabel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
