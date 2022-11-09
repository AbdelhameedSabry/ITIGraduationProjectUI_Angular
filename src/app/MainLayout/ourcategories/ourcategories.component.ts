import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-ourcategories',
  templateUrl: './ourcategories.component.html',
  styleUrls: ['./ourcategories.component.css']
})
export class OurcategoriesComponent implements OnInit {

  constructor(public catSevice:CategoryService,public prodserve:ProductService,public router:Router) { }
  catContainer:Category[]=[]

  ShowProduct(id:number){
    this.router.navigate(['/AllProducts',id])
  }

  ngOnInit(): void {
    this.catContainer=this.catSevice.getAllCategory();
  }

}
