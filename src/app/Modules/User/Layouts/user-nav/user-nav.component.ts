import { Component } from '@angular/core';
import { UserSideNavComponent } from '../user-side-nav/user-side-nav.component';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [UserSideNavComponent],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {

}
