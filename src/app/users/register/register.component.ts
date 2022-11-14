import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormControlName,Validator, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/_models/Register';
import { RegisterService } from "src/app/_services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  title="register form"
  RegisterForm=new FormGroup({
    userName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),]),
    phoneNumber:new FormControl('',Validators.minLength(11)),
    address:new FormControl('',Validators.required)
  })

  constructor(private _registerService:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.RegisterForm.value)
    this._registerService.addUser(this.RegisterForm.value as RegisterUser)
      .subscribe({
        next:(a)=>{
        console.log(a)
        }
        

        
     })
   }
  
}
