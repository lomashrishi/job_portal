import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ApiUrl='http://localhost:3000/api/post/login'; // Post Link API 

  constructor(private http: HttpClient) {}
  
  sendLogin(FormData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
    return this.http.post(this.ApiUrl, FormData, { headers });     // Post the data to the API
  }
}
