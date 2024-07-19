import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
constructor(private http: HttpClient) { } //Constructor
 
// User Register Function 
UserRegister(RegisterFormData: any,): Observable<any> {
    const ApiUrl = 'http://localhost:3000/api/post/register';  //Post Register Api For User
    console.log("Service Data=>",RegisterFormData);
    return this.http.post(ApiUrl, RegisterFormData); // Call Back Response With Send Data 
  }

  // Pin Code 
  getPinCode(PinCode:any): Observable<any> {
    const pincodeApiUrl = 'https://api.postalpincode.in/pincode/';
    const PinApiUrl = pincodeApiUrl + PinCode; // Post Link API
     return this.http.get(PinApiUrl);
   }


  }


  



