import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() {
    const saved = localStorage.getItem('loggedIn');
    this.isLoggedIn = saved === 'true';
  }

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.setItem('loggedIn', 'false');
  }
}