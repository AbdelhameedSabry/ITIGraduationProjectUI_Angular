import { AfterContentChecked, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CardDetails } from 'src/app/_models/CardDetails';
import { CardHeader } from 'src/app/_models/CardHeader';
import { AuthService } from 'src/app/_services/auth.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, AfterContentChecked {

  MyCardItems: CardDetails[] = []
  order: CardHeader = new CardHeader(0, new Date(), 0, 0, "", this.MyCardItems);
  totalCardPrice: number = 0
  i: number = 0
  constructor(private orderService: OrderService, private authService: AuthService, private router: Router) { }

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

  checkout() {
    console.log('chekedout')
    console.log(this.authService.token)
    this.order.id = 0;
    this.order.userid = this.authService.logedinUserId;
    this.order.cardproducts = this.MyCardItems;
    this.order.notes = "any";
    this.order.total = this.totalCardPrice;
    this.order.date = new Date();
    console.log(this.order)
    this.orderService.addOrder(this.order)
      .pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          alert('error')
        },
        complete: () => {
          localStorage.removeItem('card')
          this.MyCardItems = []
          this.totalCardPrice = 0
          this.router.navigateByUrl('/myOrders')
        }
      })
  }

}
