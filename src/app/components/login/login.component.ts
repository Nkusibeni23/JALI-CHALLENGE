import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;
  return password === repeatPassword ? null : { mismatch: true };
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogin: boolean = true;
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(10)]],
        lastName: ['', [Validators.required, Validators.minLength(10)]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator }
    );
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
  }

  private getRouteByRole(role: string): string {
    const roleRoutes: { [key: string]: string } = {
      ADMIN: '/admin',
      user: '/hod',
    };

    return roleRoutes[role] || '/auth';
  }

  onSubmit() {
    const { phone, password } = this.authForm.value;

    if (this.isLogin) {
      const success = this.authService.login(phone, password);
      if (success) {
        const role = localStorage.getItem('role');
        if (role === 'ADMIN') {
          this.getRouteByRole('ADMIN');
        } else {
          this.getRouteByRole('user');
        }
      }
      if (!success) {
        alert('Invalid credentials!');
      }
    }
  }

  logout() {
    this.authService.logout();
  }
}
