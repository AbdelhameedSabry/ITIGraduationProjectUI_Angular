import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './MainLayout/main-layout.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { AuthInterceptorProvider } from './_interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainLayoutModule,
    ProductModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UsersModule,
    OrderModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
