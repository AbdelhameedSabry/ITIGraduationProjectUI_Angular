import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductComponent } from './allproduct/allproduct.component';


@NgModule({
  declarations: [
    AllproductComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AllproductComponent
  ]
})
export class ProductModule { }
