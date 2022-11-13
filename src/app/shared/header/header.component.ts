import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  cats: Category[] = []
  len: number = 0
  constructor(
    private categoryservices: CategoryService,
    private router: Router,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.cats = this.categoryservices.getAllCategory();
    if (localStorage.getItem('card') != null) {
      for (let i = 1; i <= JSON.parse(localStorage.getItem('card')!).length; i++) {
        this.len = i
      }
    }
  }

  ngAfterViewChecked(): void {
    if (localStorage.getItem('card') != null) {
      for (let i = 1; i <= JSON.parse(localStorage.getItem('card')!).length; i++) {
        this.len = i
      }
    }
    this.cdr.detectChanges();

  }
}
