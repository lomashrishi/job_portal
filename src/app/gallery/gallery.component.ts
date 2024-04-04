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

  //  img load 

  imgvar:boolean=true;
  Imgload(){
    this.imgvar=true;
    this.vidvar=false;
  }
// vid load
vidvar:boolean=false;
Vidload(){
  this.vidvar=true;
  this.imgvar=false;
}


}
