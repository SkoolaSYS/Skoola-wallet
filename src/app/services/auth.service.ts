import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public signupData:any = {};

  constructor() { }
  logout(): void {
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('token');
  }
}
