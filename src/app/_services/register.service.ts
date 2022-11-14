import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../_models/Register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {




  constructor(private http: HttpClient) { }

  addUser(user: RegisterUser) {
    return this.http.post(environment.baseUrl + 'Users/Register', user);
  }
}
