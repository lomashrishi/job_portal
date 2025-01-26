import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private ApiUrl = "http://localhost:3000/api/get/user-profile"; // Use the API base URL from environment files

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
<<<<<<< HEAD
    const token = localStorage.getItem('token'); // Or sessionStorage.getItem('authToken')
=======
     // Retrieve the token from localStorage or sessionStorage
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4
    return new HttpHeaders({ 'Content-Type': 'application/json','Authorization': token ? `Bearer ${token}` : ''});
  }

  // Function to get current jobs
  getCurrentUserInfo(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.ApiUrl,{ headers }); // Use http.get and pass headers correctly
  }
}
