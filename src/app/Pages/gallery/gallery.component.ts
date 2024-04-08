import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { TopnavComponent } from '../../layouts/topnav/topnav.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FootslideComponent } from '../../layouts/footslide/footslide.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink,ImageComponent,VideoComponent,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
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
