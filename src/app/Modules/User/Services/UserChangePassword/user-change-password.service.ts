import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserChangePasswordService {


  private ApiUrl = "http://localhost:3000/api/post/user-password-change"; // Use the API base URL from environment files

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
   changePassword(passwordForm: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(this.ApiUrl, passwordForm, { headers }); // Use http.post and pass headers correctly
  }
}
