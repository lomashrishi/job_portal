import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserHeaderComponent } from '../../Layouts/user-header/user-header.component';
import { CommonModule } from '@angular/common';
import { JobTopicsComponent } from '../../Components/job-topics/job-topics.component';

@Component({
  selector: 'app-user-dash',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserFooterComponent,UserHeaderComponent,RouterLink,CommonModule,JobTopicsComponent],
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})
export class UserDashComponent {


 token = localStorage.getItem('token');
 

  jobs:any[] = [
    {
      jobTitle: 'Press release for the post of Lab Attendant',
      jobDescription: 'Press release dated 11.12 for information regarding invitation of claim objection for the post of Lab Attendant.',
      startDate: '11/12/2023',
      endDate: '31/12/2023',
      pdfUrl: '#', // Replace with actual PDF URL
      applyLink: '#' // Replace with actual application link
    },
    // Add more job objects as needed
    {
      jobTitle: 'Press release for the post of Lab Attendant',
      jobDescription: 'Press release dated 11.12 for information regarding invitation of claim objection for the post of Lab Attendant.',
      startDate: '11/12/2023',
      endDate: '31/12/2023',
      pdfUrl: '#', // Replace with actual PDF URL
      applyLink: '#' // Replace with actual application link
    },
  ];
}