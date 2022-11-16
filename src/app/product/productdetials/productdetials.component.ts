import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { CardDetails } from 'src/app/_models/CardDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetials',
  templateUrl: './productdetials.component.html',
  styleUrls: ['./productdetials.component.css']
})
export class ProductdetialsComponent implements OnInit, AfterViewInit {
  categories: Category[] = []
  product!: Product
  currentproId: number = 0
  cardDetails: CardDetails = new CardDetails(0,0,0,0,0,0,0,0)
  cartProducts: CardDetails[] = []
  @ViewChild('snack') snack!: ElementRef
  isadd: boolean = false
  flage: boolean = false
  form: FormGroup

  constructor(
    private categoryservice: CategoryService,
    private productservice: ProductService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      colorId: [0, [Validators.required, Validators.min(1)]],
      sizeId: [0, [Validators.required, Validators.min(1)]],
      amount: [0, [Validators.required, Validators.min(1)]]
    })
  }

  ngOnInit(): void {
    this.currentproId = Number(this.activeRoute.snapshot.paramMap.get('Pid'))
    this.categoryservice.getAllCategory().subscribe(cats => {
      this.categories = cats;
    })
    this.productservice.GetAllProductsByCatId(this.currentproId).subscribe(pro => {
      this.product = pro;
      this.flage = true
    })
  }

  AddToCard() {
    this.cardDetails.productId = this.product.id
    this.cardDetails.price = this.product.price
    this.cardDetails.colorId = this.form.value.colorId
    this.cardDetails.sizeId = this.form.value.sizeId
    this.cardDetails.amount = this.form.value.amount
    this.cardDetails.total = this.product.price * this.cardDetails.amount

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
    this.isadd = true
    this.ngAfterViewInit()
  }

  ngAfterViewInit(): void {
    if (this.flage == true) {
      this.snack.nativeElement.style.display = "none"
      if (this.isadd) {
        this.snack.nativeElement.style.display = "block"
        setInterval(() => {
          this.snack.nativeElement.style.display = "none"
        }, 2000)
      }
      this.isadd = false
    }
  }
}
