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
  constructor(private userService: UsersService) { 
    const token = Cookies.get('token');
    this._isLogedIn$.next(!!token);
  }

  login(user: User){
    return this.userService.login(user).pipe(
      tap((response: any) => {
        this._isLogedIn$.next(true);
        Cookies.set('token', response.token);
        console.log(response.token)
      })
    )
  }
}
