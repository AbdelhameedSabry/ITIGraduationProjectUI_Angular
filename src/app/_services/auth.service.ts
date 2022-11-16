import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Cookies } from 'typescript-cookie';
import { User } from '../_models/user';
import { UsersService } from './users.service';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogedIn$ = new BehaviorSubject<boolean>(false)
  isLogedIn$ = this._isLogedIn$.asObservable()
  logedinUserId!: number
  token: string = ""
  helper = new JwtHelperService()

  constructor(private userService: UsersService) {
    const token = Cookies.get('token') as string
    this._isLogedIn$.next(!!token);
    if ((Cookies.get('token') != null )&&(!!this.isLogedIn$)){
      this.logedinUserId = this.getUser(token)
      console.log(this.logedinUserId)
    }

  }

  login(user: User) {
    return this.userService.login(user).pipe(
      tap((response: any) => {
        this._isLogedIn$.next(true);
        Cookies.set('token', response.token);
        Cookies.set('username', user.username);
        this.token = response.token
        this.logedinUserId = this.getUser(response.token)
      })
    )
  }

  getUser(token: string) {
    const LogedUserId = this.helper.decodeToken(token)
    return Number(LogedUserId['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'])
  }
}
