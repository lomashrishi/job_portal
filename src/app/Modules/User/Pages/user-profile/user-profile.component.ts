import { Component } from '@angular/core';
import { UserHeaderComponent } from '../../Layouts/user-header/user-header.component';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserHeaderComponent,UserFooterComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
