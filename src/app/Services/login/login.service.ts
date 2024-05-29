import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {}
  
  sendLogin(FormData: any): Observable<any> {
    const ApiUrl='http://localhost:3000/api/post/login'; // Post Link API 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
    return this.http.post(ApiUrl, FormData, { headers });     // Post the data to the API
  }
}
