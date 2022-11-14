import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ]
})
export class OrderModule { }
