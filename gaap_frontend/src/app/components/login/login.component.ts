import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          if (response && response.token) {
            this.authService.setToken(response.token);
            this.router.navigate(['/blogs']);
          } else {
            this.showErrorAlert('Login failed. Invalid credentials.');
            this.loginForm.reset(); // Clear the form fields after a failed login attempt
          }
        },
        (error) => {
          this.showErrorAlert('Login failed. Please check your credentials.');
          console.error('Login failed', error);
          this.loginForm.reset(); // Clear the form fields after a failed login attempt
        }
      );
    } else {
      this.loginForm.markAllAsTouched(); // Trigger validation for all fields
      this.showErrorAlert('Please fill in all required fields.');
    }
  }

  showErrorAlert(message: string): void {
    alert(message);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
