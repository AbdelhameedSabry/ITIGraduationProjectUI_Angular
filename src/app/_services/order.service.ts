import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardHeader } from '../_models/CardHeader';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getUserOrdersById(id:number){
    return this.http.get<CardHeader>(environment.baseUrl + 'ShoppingCardHeader' + id);
  }

  addOrder(order:CardHeader){
    return this.http.post(environment.baseUrl + 'ShoppingCardHeader/CheckOut', order)
  }
}
