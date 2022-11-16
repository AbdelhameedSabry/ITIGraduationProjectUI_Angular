import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  cats: Category[] = []
  len: number = 0
  username: string = ""

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.UserName$.subscribe(res => {
      this.username = res
    })
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
    this.auth.UserName$.subscribe(res => {
      this.username = res
    })
  }

  isLogedIn(): boolean {
    let isloged: boolean = false
    this.auth.isLogedIn$.subscribe((res) => {
      if (res == true)
        isloged = true
      else
        isloged = false
    })
    return isloged
  }

  Logout() {
    this.auth.logout()
    this.isLogedIn()
    this.router.navigateByUrl('/Home')
  }
}
 