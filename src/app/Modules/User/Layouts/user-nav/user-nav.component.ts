import { Component } from '@angular/core';
import { UserSideNavComponent } from '../user-side-nav/user-side-nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [UserSideNavComponent,RouterLink],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {

}
