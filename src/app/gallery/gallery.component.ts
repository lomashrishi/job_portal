import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryComponent,RouterLink,ImageComponent,VideoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
