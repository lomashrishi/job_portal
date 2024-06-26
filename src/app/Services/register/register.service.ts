import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private pincodeApiUrl = 'https://api.postalpincode.in/pincode/';


  constructor(private http: HttpClient) {}
  // sendRegister(RegisterFormData: any): Observable<any> {
  //   const ApiUrl='http://localhost:3000/api/post/register'; // Post Link API 
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
  //   // Post the data to the API
  //   return this.http.post(ApiUrl,RegisterFormData, { headers });
  // }




  sendRegister(RegisterFormData: any): Observable<any> {
    const ApiUrl = 'http://localhost:3000/api/post/register'; // Post Link API 

    // Construct FormData
    const formData: FormData = new FormData();
    for (const key in RegisterFormData) {
      if (RegisterFormData.hasOwnProperty(key)) {
        if (key === 'ProfileImage' || key === 'SignatureImage') {
          // Assuming RegisterFormData[key] is a File object for ProfileImage and SignatureImage
          formData.append(key, RegisterFormData[key], RegisterFormData[key].name);
        } else {
          formData.append(key, RegisterFormData[key]);
        }
      }
    }

    // Post the data to the API
    return this.http.post(ApiUrl, formData);
  }


  



  getPinCode(PinCode:any): Observable<any> {
   const PinApiUrl = this.pincodeApiUrl + PinCode; // Post Link API
    return this.http.get(PinApiUrl);
  }

}
