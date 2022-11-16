import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardHeader } from '../_models/CardHeader';
import { MyOrders } from '../_models/MyOrders';
import { ShoppingHeader } from '../_models/ShoppingHeader';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getUserOrdersById(id: number) {
    return this.http.get<ShoppingHeader>(environment.baseUrl + 'Users/' + id);
  }

  addOrder(order: CardHeader) {
    return this.http.post(environment.baseUrl + 'ShoppingCardHeader/CheckOut', order)
  }

  getOrderById(id:number){
    return this.http.get<MyOrders>(environment.baseUrl + 'ShoppingCardHeader/' + id)
  }
}
