// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { LoginService } from '../Services/login/login.service';
// import { jwtDecode } from 'jwt-decode';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   getToken:any
//   decodedToken:any;
//   expirationTime:any;
//   currentTime:any;

//   constructor(private router: Router, private loginService: LoginService) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

// // if Token Is Nahi mila storage par to ya setion time out ho gya to automatic logout ho jayega

//     if (!this.loginService.isLoggedIn()) {
//       const returnUrl = state.url;
//       this.loginService.logout();  // Assuming you have a logout method
//       this.router.navigate(['/login'], { queryParams: { returnUrl } });
//       return false;
//     }

//     //  get token from locan save by login
//     this.getToken  = localStorage.getItem('token') || sessionStorage.getItem('token');

//     if (this.getToken) {
//       this.decodedToken  = jwtDecode('getToken');
//       this.expirationTime = this.decodedToken.exp * 1000;
//       this.currentTime = new Date().getTime();

//       console.log('Token:', this.getToken);
//       console.log('Expiration Time:', this.expirationTime);
//       console.log('Current Time:', this.currentTime);

//       //  agar Time Samampt Ho Jata hain Token Ka To Logout Ho Jayega
//       if (this.currentTime > this.expirationTime) {
//         alert('Token has been Expired');
//         this.loginService.logout();  // Assuming you have a logout method
//         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//         return false;
//       }
//       return false;
//     }

//     return true;
//   }
// }
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../Services/login/login.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private token: string | null = null;
  private decodedToken: any;
  private expirationTime: number | null = null;
  private currentTime: number | undefined;

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is logged in
    if (!this.loginService.isLoggedIn()) {
      const returnUrl = state.url;
      this.loginService.logout(); // Assuming you have a logout method
      this.router.navigate(['/login'], { queryParams: { returnUrl } });
      return false;
    }

    // Retrieve token from localStorage or sessionStorage
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (this.token) {
      try {
        this.decodedToken = jwtDecode(this.token); // Correct usage
        this.expirationTime = this.decodedToken.exp * 1000;
        this.currentTime = new Date().getTime();

        // console.log('Token:', this.token);
        // console.log('Expiration Time:', this.expirationTime);
        // console.log('Current Time:', this.currentTime);

        // If token is expired, logout and redirect to login page
        if (this.currentTime > this.expirationTime) {
          alert('Token has been Expired. You will be logged out.');
          this.loginService.logout(); // Assuming you have a logout method
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }

        return true; // Token is valid, allow access
      } catch (error) {
        console.error('Token decoding failed:', error);
        this.loginService.logout(); // Assuming you have a logout method
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    }

    // If no token found, redirect to login page
    this.loginService.logout(); // Assuming you have a logout method
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
