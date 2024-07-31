import { Component } from '@angular/core';
import { LoginService } from '../../../../Services/login/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-side-nav.component.html',
  styleUrl: './user-side-nav.component.css'
})
export class UserSideNavComponent {

  constructor(private loginService: LoginService) { }

    // Call logout Function 
    onLogout(): void {
      this.loginService.logout();
    }

}
