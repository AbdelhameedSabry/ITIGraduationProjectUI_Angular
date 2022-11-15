import { AfterContentInit, AfterViewInit, Component, ElementRef, enableProdMode, ErrorHandler, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UsersService } from 'src/app/_services/users.service';
import { setCookie, getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  token: any
  flag: boolean = false
  constructor(private fb: FormBuilder, private usersSer: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],

    })
  }

  login() {
    this.usersSer.login(this.form.value)
      .pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe({
        next: (response) => {
          this.token = response;
          setCookie("token", this.token.token);
        },
        error: (error) => {
          if (error.status == 400)
            this.flag = true
        },
        complete: () => {
          this.router.navigateByUrl('/Home')
        }
      })
  }
}
