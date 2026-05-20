import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { ApiService } from '../api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiService
  ) {}

  async onLogin() {
    const success = await this.api.login(this.email, this.password);

    if (success) {
      this.auth.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}