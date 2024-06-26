import { Component } from '@angular/core';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [AdminProfileComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

}
