import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { CardDetails } from 'src/app/_models/CardDetails';

@Component({
  selector: 'app-productdetials',
  templateUrl: './productdetials.component.html',
  styleUrls: ['./productdetials.component.css']
})
export class ProductdetialsComponent implements OnInit {
  categories: Category[]
  product!: Product
  currentproId: number
  cardDetails: CardDetails = new CardDetails(0, "", "", "", "", 0, 0, 0)
  cartProducts: CardDetails[] = []

  constructor(
    private categoryservice: CategoryService,
    private productservice: ProductService,
    private activeRoute: ActivatedRoute) {

    this.categories = []
    this.currentproId = 0
  }

  ngOnInit(): void {
    this.currentproId = Number(this.activeRoute.snapshot.paramMap.get('Pid'))
    this.categories = this.categoryservice.getAllCategory()
    this.product = this.productservice.GetProductById(this.currentproId)
  }

  AddCard(product: Product) {
    this.cardDetails.Id = product.ProductId
    this.cardDetails.Name = product.Name
    this.cardDetails.Price = product.Price
    this.cardDetails.totalPrice = product.Price * this.cardDetails.Count
    if (localStorage.getItem('card') != null) {
      this.cartProducts = JSON.parse(localStorage.getItem('card')!);
      this.cartProducts.push(this.cardDetails)
      localStorage.setItem('card', JSON.stringify(this.cartProducts))
    }
    else {
      this.cartProducts = []
      this.cartProducts.push(this.cardDetails)
      localStorage.setItem('card', JSON.stringify(this.cartProducts))
    }
  }
}
