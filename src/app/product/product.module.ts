import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductComponent } from './allproduct/allproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProductdetialsComponent } from './productdetials/productdetials.component';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AllproductComponent,
    ProductdetialsComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AllproductComponent,
  ],
})
export class ProductModule { }
