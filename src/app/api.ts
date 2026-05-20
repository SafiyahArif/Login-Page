import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'admin@gmail.com' && password === '123456') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }
}