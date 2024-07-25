// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { CanActivateFn } from '@angular/router';
// import { LoginService } from '../Services/login/login.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class authGuard implements CanActivateFn {
//   constructor(private router: Router, private loginService: LoginService) {}
//   canActivate(route:any, state:any): any {
//     if (!this.loginService.isLoggedIn()) {
//       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//       return false;
//     }
//     return true;
//   }
// }

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../Services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }
}
