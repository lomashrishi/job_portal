import { Component } from '@angular/core';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserHeaderComponent } from '../../Layouts/user-header/user-header.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserFooterComponent,UserHeaderComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
