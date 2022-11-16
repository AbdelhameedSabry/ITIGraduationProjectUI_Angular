import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categories: Category[] = []
  constructor(
    private categoryservice: CategoryService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.categoryservice.getAllCategory().subscribe(cats => {
      this.categories = cats;
    })
  }
}
