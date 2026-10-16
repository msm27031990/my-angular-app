import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  // Use a reactive signal to hold the session state
  protected readonly token = signal<string | null>(localStorage.getItem('jwt_token'));

  isAuthenticated() {
    return this.token() !== null;
  }

  getToken() {
    return this.token();
  }

  login(credentials: { username: string; password: String }) {
    return this.http.post<any>('http://localhost:8080/api/auth/login', credentials).pipe(
      tap(res => {
        if (res && res.token) {
          localStorage.setItem('jwt_token', res.token);
          this.token.set(res.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.token.set(null);
  }
}
