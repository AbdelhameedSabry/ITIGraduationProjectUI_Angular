import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CardDetails } from 'src/app/_models/CardDetails';
import { MyOrders } from 'src/app/_models/MyOrders';
import { ShoppingHeader } from 'src/app/_models/ShoppingHeader';
import { AuthService } from 'src/app/_services/auth.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  
  orderId:number = 0
  MyorderList!: ShoppingHeader
  showOrder!: MyOrders
  cardDetails:CardDetails[] = []
  constructor(private ar:ActivatedRoute, private orderserice: OrderService, private authService:AuthService, private router:Router) { 
    this.showOrder = new MyOrders(0,new Date(),0,"",0,this.cardDetails)
  }

  ngOnInit(): void {
    this.ar.params.subscribe(a => {
      this.orderId = a['id']
    })
    this.orderserice.getOrderById(this.orderId)
      .pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe({
        next: (response) => {
          this.showOrder = response
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

  isLogedIn(): boolean {
    let isloged: boolean = false
    this.authService.isLogedIn$.subscribe((res) => {
      if (res == true)
        isloged = true
      else
        isloged = false
    })
    return isloged
  }

  Logout() {
    this.authService.logout()
    this.isLogedIn()
    this.router.navigateByUrl('/Home')
  }

}
