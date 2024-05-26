import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private pincodeApiUrl = 'https://api.postalpincode.in/pincode/';


  constructor(private http: HttpClient) {}
  sendRegister(RegisterFormData: any): Observable<any> {
    const ApiUrl='http://localhost:3000/api/post/register'; // Post Link API 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
    // Post the data to the API
    return this.http.post(ApiUrl,RegisterFormData, { headers });
  }

  getPinCode(PinCode:any): Observable<any> {
   const PinApiUrl = this.pincodeApiUrl + PinCode; // Post Link API
    return this.http.get(PinApiUrl);
  }

}
