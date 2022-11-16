import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
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
  constructor(private orderserice: OrderService, private authservice: AuthService, private router: Router) {
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

  Logout() {
    this.authservice.logout()
    this.isLogedIn()
    this.router.navigateByUrl('/Home')
  }

  isLogedIn(): boolean {
    let isloged: boolean = false
    this.authservice.isLogedIn$.subscribe((res) => {
      if (res == true)
        isloged = true
      else
        isloged = false
    })
    return isloged
  }

}
