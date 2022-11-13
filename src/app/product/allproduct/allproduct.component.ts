import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { CategoryWithProducts } from 'src/app/_models/category-with-products';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})

export class AllproductComponent implements OnInit {

  categories: Category[]
  productContainer: Product[]
  curuntId: number = 0
  showCategory!: CategoryWithProducts

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
    console.log(this.curuntId);
    this.categoryservice.getAllCategory().subscribe(cats => {
      this.categories = cats;
    })
    this.categoryservice.getCategoryById(this.curuntId).subscribe(cat => {
      this.showCategory = cat;
      this.productContainer = this.showCategory.products;
    })
  }

  changedata(catid: number) {
    this.categoryservice.getCategoryById(catid).subscribe(cat => {
      this.showCategory = cat;
      this.productContainer = this.showCategory.products;
    })
  }
}
