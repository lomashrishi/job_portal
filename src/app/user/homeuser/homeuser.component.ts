import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UsrfooterComponent } from '../usrfooter/usrfooter.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-homeuser',
  standalone: true,
  imports: [SidebarComponent,UsrfooterComponent,RouterOutlet],
  templateUrl: './homeuser.component.html',
  styleUrl: './homeuser.component.css'
})
export class HomeuserComponent {

}
