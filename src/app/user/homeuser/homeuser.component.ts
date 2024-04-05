import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UsrfooterComponent } from '../usrfooter/usrfooter.component';

@Component({
  selector: 'app-homeuser',
  standalone: true,
  imports: [HomeuserComponent],
  templateUrl: './homeuser.component.html',
  styleUrl: './homeuser.component.css'
})
export class HomeuserComponent {

}
