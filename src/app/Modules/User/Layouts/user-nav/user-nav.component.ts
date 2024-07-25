import { Component } from '@angular/core';
import { UserSideNavComponent } from '../user-side-nav/user-side-nav.component';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../../Services/login/login.service';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [UserSideNavComponent,RouterLink],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {

  constructor(private loginService: LoginService) { }


  // Call logout Function 
  onLogout(): void {
    this.loginService.logout();
  }

}
