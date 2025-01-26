import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';
import { NotificationService } from '../../Services/notifications/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, TopnavComponent, HeaderComponent, NavbarComponent, FootslideComponent, FooterComponent],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = []; // Variable to store the API response data
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 7; // Items per page
  totalPages: number = 0; // Total pages

  constructor(public notificationService: NotificationService) {} // Inject the notification service

  infoData(): void {
    this.notificationService.getNotification().subscribe((response: any) => {
      this.notifications = response;
      this.totalPages = Math.ceil(this.notifications.length / this.itemsPerPage);
      // console.log(this.notifications); // Log the data to the console for debugging
    });
  }

  // Method to get the notifications for the current page
  getPaginatedNotifications() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.notifications.slice(startIndex, endIndex);
  }

  // Method to change the page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Auto Call
  ngOnInit(): void {
    this.infoData(); // Load notifications when the page loads
  }
}
