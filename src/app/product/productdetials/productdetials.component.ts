import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-productdetials',
  templateUrl: './productdetials.component.html',
  styleUrls: ['./productdetials.component.css']
})
export class ProductdetialsComponent implements OnInit {
  categories: Category[]
  product!: Product
  currentproId: number
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

}
