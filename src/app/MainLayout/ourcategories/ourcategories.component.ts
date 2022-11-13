import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ourcategories',
  templateUrl: './ourcategories.component.html',
  styleUrls: ['./ourcategories.component.css']
})
export class OurcategoriesComponent implements OnInit {
  catContainer: Category[] = []

  constructor(
    public catSevice: CategoryService,
    public prodserve: ProductService,
    public router: Router,
    private sanitizer:DomSanitizer) { } 

    image!:any
    
  ngOnInit(): void {
    this.catSevice.getAllCategory().subscribe(cats => {
      this.catContainer = cats;

      console.log(cats);
    })
  }

  

  ShowProduct(id: number) {
    this.router.navigate(['/Category/', id, 'Products'])
  }

}
