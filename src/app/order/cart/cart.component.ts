import { AfterContentChecked, Component, ElementRef, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/_models/CardDetails';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, AfterContentChecked {

  MyCardItems: CardDetails[] = []
  totalCardPrice: number = 0
  i: number = 0
  constructor() { }

  ngOnInit(): void {
    this.MyCardItems = JSON.parse(localStorage.getItem('card')!)
  }

  DeleteElement(element: CardDetails) {
    this.MyCardItems = this.MyCardItems.filter(c => c != element);
  }

  updateCard() {
    localStorage.removeItem('card')
    localStorage.setItem('card', JSON.stringify(this.MyCardItems))
  }

  updateTotalPrice(product: CardDetails, event: any) {
    product.amount = event.target.value
    product.total = product.amount * product.price
  }

  ngAfterContentChecked(): void {
    this.totalCardPrice = 0
    for (this.i = 0; this.i < this.MyCardItems.length; this.i++) {
      this.totalCardPrice += this.MyCardItems[this.i].total
    }
  }

}
