import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {

}
