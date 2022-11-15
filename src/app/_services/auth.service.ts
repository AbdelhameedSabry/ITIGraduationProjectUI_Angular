import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Cookies } from 'typescript-cookie';
import { User } from '../_models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogedIn$ = new BehaviorSubject<boolean>(false)
  isLogedIn$ = this._isLogedIn$.asObservable()
  logedinUserId!:number
  token:string = ""
  constructor(private userService: UsersService) { 
    const token = Cookies.get('token');
    this._isLogedIn$.next(!!token);
  }

  login(user: User){
    return this.userService.login(user).pipe(
      tap((response: any) => {
        this._isLogedIn$.next(true);
        Cookies.set('token', response.token);
        Cookies.set('username', user.username);
        this.token = response.token
        //this.logedinUserId = 
        console.log(response.token)
        this.logedinUserId = this.getUser(response.token)
      })
    )
  }

  getUser(token:string){
    return JSON.parse(atob(token.split('.')[1])).nameidentifier;
  }
}
