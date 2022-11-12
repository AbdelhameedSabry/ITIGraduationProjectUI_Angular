import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductComponent } from './allproduct/allproduct.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProductdetialsComponent } from './productdetials/productdetials.component';

@NgModule({
  declarations: [
    AllproductComponent,
    ProductdetialsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
  ],
  exports: [
    AllproductComponent,
  ],
})
export class ProductModule { }
