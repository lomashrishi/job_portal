import { Component } from '@angular/core';
import { UserNavComponent } from "../../Layouts/user-nav/user-nav.component";
import { UserSideNavComponent } from "../../Layouts/user-side-nav/user-side-nav.component";
import { UserFooterComponent } from "../../Layouts/user-footer/user-footer.component";

@Component({
  selector: 'app-user-notifications',
  standalone: true,
  imports: [UserNavComponent, UserSideNavComponent, UserFooterComponent],
  templateUrl: './user-notifications.component.html',
  styleUrl: './user-notifications.component.css'
})
export class UserNotificationsComponent {

}
