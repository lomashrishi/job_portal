import { Component } from '@angular/core';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserFooterComponent } from "../../Layouts/user-footer/user-footer.component";

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [UserNavComponent, UserSideNavComponent, UserFooterComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {

}
