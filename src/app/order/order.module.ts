import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProvider } from '../_interceptor/auth.interceptor';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    OrderComponent,
    CartComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AuthInterceptorProvider]
})
export class OrderModule { }
