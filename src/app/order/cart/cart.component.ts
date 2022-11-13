import { Component, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/_models/CardDetails';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  MyCardItems:CardDetails[]=[]
  totalCardPrice:number=0
i:number=0
  constructor() { }

  ngOnInit(): void {
    this.MyCardItems=JSON.parse(localStorage.getItem('card')!)
    for( this.i=0;this.i< this.MyCardItems.length; this.i++){
      this.totalCardPrice +=this.MyCardItems[this.i].totalPrice
    }
  }

}
