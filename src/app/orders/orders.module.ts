import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AllordersComponent } from './allorders/allorders.component';

@NgModule({
  declarations: [
    CartComponent,
    AllordersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class OrdersModule { }
