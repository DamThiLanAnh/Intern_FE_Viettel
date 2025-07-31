import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';
  failedAttempts: number = 0;
  readonly maxAttempts: number = 5;
  showPassword: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Email:', this.email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.email.trim())) {
      this.message = 'Email không hợp lệ.';
      return;
    }

    if (this.password.trim().length < 6) {
      this.message = 'Mật khẩu phải có ít nhất 6 ký tự.';
      return;
    }

    if (this.email === 'test@example.com' && this.password === '123456') {
      this.message = 'Đăng nhập thành công!';
      setTimeout(() => {
        this.router.navigate(['/list']);
      }, 1000);
      this.failedAttempts = 0;
    } else {
      this.failedAttempts++;
      if (this.failedAttempts >= this.maxAttempts) {
        this.message = `Bạn đã nhập sai quá ${this.maxAttempts} lần. Vui lòng thử lại sau.`;
      } else {
        this.message = `Sai email hoặc mật khẩu. Lần ${this.failedAttempts}/${this.maxAttempts}.`;
      }
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  isInputDisabled(): boolean {
    return this.failedAttempts >= this.maxAttempts;
  }
}