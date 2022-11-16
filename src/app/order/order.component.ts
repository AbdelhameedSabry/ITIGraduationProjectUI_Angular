import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CardHeader } from '../_models/CardHeader';
import { MyOrders } from '../_models/MyOrders';
import { ShoppingHeader } from '../_models/ShoppingHeader';
import { AuthService } from '../_services/auth.service';
import { OrderService } from '../_services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  MyorderList!: ShoppingHeader
  constructor(private orderserice: OrderService, private authservice: AuthService) { 
    //this.MyorderList.shoppingcardheader = new MyOrders[]
  }

  ngOnInit(): void {
    console.log(this.authservice.logedinUserId)
    this.orderserice.getUserOrdersById(this.authservice.logedinUserId)
      .pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe({
        next: (response) => {
          this.MyorderList = response
          console.log(response)
        },
        error: (error) => {
          alert("no data")
        },
        complete: () => {
          console.log("salah")
        }
      })
  }

}
