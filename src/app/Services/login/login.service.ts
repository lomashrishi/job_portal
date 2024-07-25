import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private ApiUrl = "http://localhost:3000/api/post/login"; // Use the API base URL from environment files
  constructor(private http: HttpClient) {} // constructor

// For Auth Guard

isLoggedIn(): boolean {
  if (localStorage.getItem('token') || sessionStorage.getItem('token')){
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

  // For Log Out Auth Guard
  logout(): void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
    }
  }

}