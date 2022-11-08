import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MainLayout/home/home.component';
import { AllordersComponent } from './orders/allorders/allorders.component';
import { CartComponent } from './orders/cart/cart.component';
import { AllproductComponent } from './product/allproduct/allproduct.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'AllProducts', component: AllproductComponent },
  { path: 'myOrders', component: AllordersComponent },
  { path: 'myCart', component: CartComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
