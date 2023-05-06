import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShippingCartComponent } from './shipping-cart/shipping-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductRepresentComponent } from './product-represent/product-represent.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'cart',component:ShippingCartComponent},
   {path:'Products/:data',component:ProductsListComponent},
   {path:'ProductDetails/:data',component:ProductRepresentComponent},
  {path:'CheckOut',component:CheckOutComponent},
  {path:'test',component:TestComponent},


];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){}
  
 }
 export const MyRouting=[
  ShippingCartComponent, 
  MainPageComponent,
  CheckOutComponent,
  ProductRepresentComponent,
  ProductsListComponent,
  TestComponent

]
