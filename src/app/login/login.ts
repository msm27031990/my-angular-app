import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: '../app.css',
  imports: [FormsModule]
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Capture user inputs reactively
  protected readonly username = signal<string>('');
  protected readonly password = signal<string>('');
  protected readonly loginError = signal<string | null>(null);

  protected onSubmitLogin() {
    this.loginError.set(null);

    const credentials = {
      username: this.username(),
      password: this.password()
    };

    this.authService.login(credentials).subscribe({
      next: () => {
        // Success! Token is saved. Forward user to the protected products page
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Login request rejected:', err);
        this.loginError.set('Invalid credentials or server offline.');
      }
    });
  }
}
