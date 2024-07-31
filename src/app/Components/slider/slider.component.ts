import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoticeBoardService } from '../../Services/NoticeBoard/notice-board.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ RouterLink,CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{
  notices:any;

  constructor(public NoticeBoardService: NoticeBoardService) {} // Inject the notification service

// For Notices Get
  infoData(): void {
    this.NoticeBoardService.getNotices().subscribe((response: any) => {
      this.notices = response.resp;
      // alert(this.notice);
      // console.log(this.notice); // Log the data to the console for debugging
    });
  }

   // Auto Call
   ngOnInit(): void {
    this.infoData(); // Load notifications when the page loads
  }


}
