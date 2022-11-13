import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  proInCat: Product[] = [];

  constructor(private http:HttpClient) { }

  GetAllProducts() {

  }

  GetAllProductsByCatId(id: number) {
    return this.http.get<Product>(environment.baseUrl + "Products/" + id)
  }

  GetProductById(id:number) {
    
  }





}
