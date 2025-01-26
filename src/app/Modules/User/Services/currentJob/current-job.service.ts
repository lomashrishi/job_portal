import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CurrentJobService {
  private ApiUrl = "http://localhost:3000/api/get/current-job"; // Use the API base URL from environment files

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
      // Retrieve the token from localStorage or sessionStorage
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return new HttpHeaders({ 'Content-Type': 'application/json','Authorization': token ? `Bearer ${token}` : ''});
  }

  // Function to get current jobs
  getCurrentJobs(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.ApiUrl,{ headers }); // Use http.get and pass headers correctly
  }
}
