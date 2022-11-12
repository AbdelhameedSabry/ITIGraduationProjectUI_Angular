import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})

export class AllproductComponent implements OnInit {

  categories: Category[]
  productContainer: Product[]
  curuntId: number = 0
  cartProducts: Product[] = []

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private categoryservice: CategoryService,
    private router: Router) {

    this.categories = []
    this.productContainer = []
  }

  ngOnInit(): void {
    this.curuntId = Number(this.activeRouter.snapshot.paramMap.get("Cid"))
    this.categories = this.categoryservice.getAllCategory()
    this.productContainer = this.productService.GetAllProductsByCatId(this.curuntId);
  }

  changedata(catid: number) {
    this.productContainer = this.productService.GetAllProductsByCatId(catid);
  }

  addToCard(product: Product) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.cartProducts.push(product)
    localStorage.setItem('card', JSON.stringify(this.cartProducts))
  }
}
