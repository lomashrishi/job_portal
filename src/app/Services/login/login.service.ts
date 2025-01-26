import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  decodedToken: any;
  expirationTime: any;
  currentTime: any;
  getToken: any;

  private ApiUrl= `${environment.apiBaseUrl}/post/login`;// Use the API base URL from environment files

  constructor(private http: HttpClient, private router: Router) {
    this.getToken = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (this.getToken) {
      this.decodedToken = jwtDecode(this.getToken);
      this.expirationTime = this.decodedToken.exp * 1000;
      this.currentTime = new Date().getTime();

      console.log('Token:', this.getToken);
      console.log('Expiration Time:', this.expirationTime);
      console.log('Current Time:', this.currentTime);
    }
  }

  // For Auth Guard
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token') && !!sessionStorage.getItem('token');
  }

  // Login Call Back Function
  sendLogin(FormData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.ApiUrl, FormData, { headers });
  }

  // For Log Out With Auth
  logout(): void {
    if (localStorage.getItem('token') || sessionStorage.getItem('token') || this.currentTime > this.expirationTime) {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
