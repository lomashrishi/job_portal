import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  decodedToken:any;
  expirationTime:any;
  currentTime:any;

  private ApiUrl = "http://localhost:3000/api/post/login"; // Use the API base URL from environment files
  constructor(private http: HttpClient, private router: Router) { } // constructor

  // For Auth Guard

  isLoggedIn(): boolean {
    if (localStorage.getItem('token') && sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // Login Call Back Function
  sendLogin(FormData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
    return this.http.post(this.ApiUrl, FormData, { headers });     // Post the data to the API
  }

  getToken :any = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (getToken:any) {
    this.decodedToken  = jwtDecode('getToken');
    this.expirationTime = this.decodedToken.exp * 1000;
    this.currentTime = new Date().getTime();

    console.log('Token:', getToken);
    console.log('Expiration Time:', this.expirationTime);
    console.log('Current Time:', this.currentTime);
  }






  // For Log Out With Auth
  logout(): void {
    // this.http.post('http://localhost:3000/api/post/logout', {}).subscribe((response) => {
    //   console.log(response);
    //   alert(response); // Display the response message in an alert
      // Remove token from local storage
      if (localStorage.getItem('token') || sessionStorage.getItem('token') || this.currentTime > this.expirationTime) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']); // redirect to login page
      }
    // });
  }


}

