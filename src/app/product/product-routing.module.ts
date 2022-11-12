import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ProductdetialsComponent } from './productdetials/productdetials.component';

const routes: Routes = [
  { path: ':Cid/Products', component: AllproductComponent },
  { path: ':Cid/Products/:Pid', component: ProductdetialsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }