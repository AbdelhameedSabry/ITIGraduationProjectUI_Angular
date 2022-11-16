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
  private _UserName$ = new BehaviorSubject<string>('')
  UserName$ = this._UserName$.asObservable()

  logedinUserId!: number
  token: string = ""
  helper = new JwtHelperService()

  constructor(private userService: UsersService) {
    const token = Cookies.get('token') as string
    this._isLogedIn$.next(!!token);
    if ((Cookies.get('token') != null)) {
      this.logedinUserId = this.getUser(token)
      this.token = String(Cookies.get('token'))
      console.log(this.logedinUserId)
    }

    if (Cookies.get('username') != null)
      this._UserName$.next(String(Cookies.get('username')))
  }

  login(user: User) {
    return this.userService.login(user).pipe(
      tap((response: any) => {
        this._isLogedIn$.next(true);
        Cookies.set('token', response.token);
        Cookies.set('username', user.username);
        this._UserName$.next(String(Cookies.get('username')))
        this.token = response.token
        this.logedinUserId = this.getUser(response.token)
      })
    )
  }

  logout() {
    if (Cookies.get('token')) {
      Cookies.remove('token')
    }
    if (Cookies.get('username')) {
      Cookies.remove('username')
    }
    this._UserName$.next('')
    this._isLogedIn$.next(false);
  }

  getUser(token: string) {
    const LogedUserId = this.helper.decodeToken(token)
    return Number(LogedUserId['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'])
  }
}
