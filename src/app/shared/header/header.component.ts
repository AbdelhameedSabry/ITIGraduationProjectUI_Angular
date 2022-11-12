import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cats: Category[] = []

  constructor(
    private categoryservices: CategoryService,
    private router: Router,) { }

  ngOnInit(): void {
    this.cats = this.categoryservices.getAllCategory();
  }
}
