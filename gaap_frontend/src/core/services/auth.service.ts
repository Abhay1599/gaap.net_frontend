import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    this.checkInitialAuthStatus();
  }

  private checkInitialAuthStatus(): void {
    const token = this.getToken();
    this.authStatus.next(!!token);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signin`, credentials).pipe(
      tap(response => this.setToken(response.token)),
      catchError(this.handleError('login', []))
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, user).pipe(
      tap(response => this.setToken(response.token)),
      catchError(this.handleError('register', []))
    );
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
    this.authStatus.next(true);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
