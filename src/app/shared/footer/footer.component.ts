import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categories:Category[] = []
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getAllCategory().subscribe(cats => {
      this.categories = cats;
    })
  }

}
