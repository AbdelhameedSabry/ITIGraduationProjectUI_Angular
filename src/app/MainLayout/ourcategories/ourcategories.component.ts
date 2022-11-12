import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { Category } from 'src/app/_models/category';

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
    public router: Router) { }

  ngOnInit(): void {
    this.catContainer = this.catSevice.getAllCategory();
  }

  ShowProduct(id: number) {
    this.router.navigate(['/Category/', id, 'Products'])
  }

}
