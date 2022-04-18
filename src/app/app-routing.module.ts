import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SuccessComponent } from './success/success.component';
import { OrderFailureComponent } from './order-failure/order-failure.component';

const routes: Routes = [
  { path: '',   redirectTo: 'viewProducts', pathMatch: 'full' },
  {path: 'viewProducts', component: AllProductsComponent},
  {path: 'productDetail/:id/:name', component: ProductDetailsComponent},
  {path: 'success', component: SuccessComponent}, 
  {path: 'orderFailure', component: OrderFailureComponent}, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
