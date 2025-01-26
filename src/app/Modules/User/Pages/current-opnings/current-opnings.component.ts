import { Component } from '@angular/core';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { CurrentJobService } from '../../Services/currentJob/current-job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-opnings',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserFooterComponent,CommonModule],
  templateUrl: './current-opnings.component.html',
  styleUrl: './current-opnings.component.css'
})
export class CurrentOpningsComponent {


  CurrentJob: any[] = [];
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Items per page
  totalPages: number = 0; // Total pages

  constructor(public CurrentJobService: CurrentJobService) {}

  // For Table Current Opnings
  infoData(): void {
    this.CurrentJobService.getCurrentJobs().subscribe((response: any) => {
      this.CurrentJob = response;
      console.log(this.CurrentJob); // Log the data to the console for debugging
      this.totalPages = Math.ceil(this.CurrentJob.length / this.itemsPerPage);
    });
  }

  // Method to get the CurrentJob for the current page
  getPaginatedCurrentJobs() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.CurrentJob.slice(startIndex, endIndex);
  }

  // Method to change the page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Auto Call
  ngOnInit():void {
    this.infoData(); // Load CurrentJob when the page loads
  }

}
