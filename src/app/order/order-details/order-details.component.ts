import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
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
  constructor(private ar:ActivatedRoute, private orderserice: OrderService, private authService:AuthService) { 
    this.showOrder = new MyOrders(0,new Date(),0,"");
  }

  ngOnInit(): void {
    this.ar.params.subscribe(a => {
      this.orderId = a['id']
    })
    this.orderserice.getUserOrdersById(this.authService.logedinUserId)
      .pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe({
        next: (response) => {
          this.MyorderList = response
          for (let i = 0; i < this.MyorderList?.shoppingcardheader.length; i++) {
            if(this.MyorderList.shoppingcardheader[i].id == this.orderId){
              this.showOrder = this.MyorderList.shoppingcardheader[i]
              console.log(this.showOrder)
            }
          }
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
