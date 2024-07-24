// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {
//   constructor(private http: HttpClient) {}
//   sendMessage(FormData: any): Observable<any> {
//     const ApiUrl='http://localhost:3000/api/post'; // Post Link API 
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
//     // Post the data to the API
//     return this.http.post(ApiUrl, FormData, { headers });
//   }
  
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/post/contact'; // Post Link API 

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Or sessionStorage.getItem('authToken')
    return new HttpHeaders({'Content-Type': 'application/json','Authorization': token ? `Bearer ${token}` : '' });
  }

  sendMessage(formData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    // Post the data to the API
    return this.http.post(this.apiUrl, formData, { headers });
  }
}
