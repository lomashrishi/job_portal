import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {

  private apiUrl = 'http://localhost:3000/api/post/user-feedback'; // Post Link API 

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Or sessionStorage.getItem('authToken')
    return new HttpHeaders({'Content-Type': 'application/json','Authorization': token ? `Bearer ${token}` : '' });
  }

  sendFeedback(formData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    // Post the data to the API
    return this.http.post(this.apiUrl, formData, { headers });
  }
  

}
