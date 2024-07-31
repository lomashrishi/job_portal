import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeBoardService {
  private ApiUrl = "http://localhost:3000/api/get/notice-board"; // Use the API base URL from environment files
  constructor(private http: HttpClient) {} // constructor
  // Login Call Back Function 
  getNotices(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
    return this.http.get(this.ApiUrl,{headers});     // get the data to the API
  }
}
