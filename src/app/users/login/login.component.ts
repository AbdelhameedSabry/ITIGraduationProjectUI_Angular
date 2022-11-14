import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';
import { setCookie, getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, AfterContentInit {

  form!: FormGroup;
  token:any
  @ViewChild("logginmessages")  element!:ElementRef
  flag:boolean = false
  constructor(private fb: FormBuilder, private usersSer:UsersService, private router:Router) { }
  ngAfterContentInit(): void {
    this.ngAfterViewInit()
  }

  ngAfterViewInit() {
    if(this.flag == true){
      this.element.nativeElement.style.display = "block";
    }
    console.log(this.flag);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],

    })
  }


  login() {
    this.usersSer.login(this.form.value).subscribe(t => {
      this.token = t;
      console.log(this.token)
      setCookie("token",this.token.token); 
    },
    errorr => {
      this.flag = true;
      alert("Invalid username or password!");
    },
    () => {
      this.router.navigateByUrl("/Home");
      //alert("Logged in successfully!");
    })
  }

}
