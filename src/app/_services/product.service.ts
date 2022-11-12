import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 100, "product1", 1000, "AAAAAAA"),
    new Product(2, 100, "product2", 2000, "BBBBBBB"),
    new Product(3, 200, "product3", 1500, "CCCCCCC"),
    new Product(4, 200, "product4", 1500, "DDDDDDD"),
    new Product(5, 200, "product5", 143, "EEEEEEEEEEE"),
    new Product(6, 200, "product6", 1500, "FFFFFFFF"),
  ]

  proInCat: Product[] = [];

  GetAllProducts() {
    return this.products;
  }

  GetAllProductsByCatId(id: number): Product[] {
    this.proInCat=[]
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].CategoryId == id) {
        this.proInCat.push(this.products[i])
      }
    }
    return this.proInCat
  }

  GetProductById(id: number) {
    return this.products[id - 1]
  }




  constructor() { }
}
