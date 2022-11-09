import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

   

  curuntId:number=0
  constructor(public productService:ProductService,public AR:ActivatedRoute) { }
  productContainer:Product[]=[]
  

  ngOnInit(): void {
    this.curuntId=Number(this.AR.snapshot.paramMap.get("Pid")) 
    this.productContainer=this.productService.GetAllProductsByCatId(this.curuntId);
  }

}
