import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, throwError } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { environment } from 'src/environments/environment';
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
  constructor(private fb: FormBuilder, private usersSer: UsersService, private router: Router, private authSer: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],

    })
  }

  login() {
    if(this.form.invalid){
      return;
    }
 
    
    this.authSer.login(this.form.value)
    .subscribe((response) => {
      console.log(response)
      this.router.navigateByUrl('/Home');
    })
    // this.usersSer.login(this.form.value)
    //   .pipe(
    //     catchError((error) => {
    //       return throwError(() => error)
    //     })
    //   )
    //   .subscribe({
    //     next: (response) => {
    //       this.token = response;
    //       setCookie("token", this.token.token);
    //     },
    //     error: (error) => {
    //       if (error.status == 400)
    //         this.flag = true
    //     },
    //     complete: () => {
    //       this.router.navigateByUrl('/Home')
    //     }
    //   })
  }
}
