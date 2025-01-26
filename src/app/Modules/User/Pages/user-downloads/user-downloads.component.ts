import { Component } from '@angular/core';

@Component({
  selector: 'app-user-downloads',
  standalone: true,
  imports: [],
  templateUrl: './user-downloads.component.html',
  styleUrl: './user-downloads.component.css'
})
export class UserDownloadsComponent {

  currentYear = new Date().getFullYear();
  years: number[] = [];

  constructor() {
    this.generateYears();
  }

  generateYears() {
    for (let i = this.currentYear; i >= 1950; i--) {
      this.years.push(i);
    }
  }

}
