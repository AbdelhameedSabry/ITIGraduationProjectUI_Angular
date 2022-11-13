import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class ProductdetialsComponent implements OnInit, AfterViewInit {
  categories: Category[]
  product!: Product
  currentproId: number
  cardDetails: CardDetails = new CardDetails(0, "", "", "", "", 0, 0, 0)
  cartProducts: CardDetails[] = []
  @ViewChild('snack') snack!: ElementRef
  isadd: boolean = false

  constructor(
    private categoryservice: CategoryService,
    private productservice: ProductService,
    private activeRoute: ActivatedRoute) {

    this.categories = []
    this.currentproId = 0
  }


  ngOnInit(): void {
    this.currentproId = Number(this.activeRoute.snapshot.paramMap.get('Pid'))
    this.categoryservice.getAllCategory().subscribe(cats => {
      this.categories = cats;
    }) 
    this.productservice.GetAllProductsByCatId(this.currentproId).subscribe(pro => {
      this.product = pro;
      console.log(this.product);
    })
  }

  AddCard(product: Product) {
    this.cardDetails.Id = product.id
    this.cardDetails.Name = product.productName
    this.cardDetails.Price = product.price
    this.cardDetails.totalPrice = product.price * this.cardDetails.Count
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
    this.snack.nativeElement.style.display = "none"
    if(this.isadd){
      this.snack.nativeElement.style.display = "block"
      setInterval(() => {
        this.snack.nativeElement.style.display = "none"
      }, 2000)
    }
    this.isadd=false
  }
}
