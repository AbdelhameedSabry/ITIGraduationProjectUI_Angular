import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';
import { Cookies } from 'typescript-cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  cats: Category[] = []
  len: number = 0
  username:any
  constructor(
    private categoryservices: CategoryService,
    private router: Router,
    private cdr: ChangeDetectorRef) { 
      this.username = Cookies.get('username')
    }


  ngOnInit(): void {
    if (localStorage.getItem('card') != null) {
      for (let i = 1; i <= JSON.parse(localStorage.getItem('card')!).length; i++) {
        this.len = i
      }
    }
    if(Cookies.get('username')){
      this.username = Cookies.get('username')
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

  Logout(){
    if(Cookies.get('token')){
      Cookies.remove('token')
    }
    if(Cookies.get('username')){
      Cookies.remove('username')
    }
  }
}
