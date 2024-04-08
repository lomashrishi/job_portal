import { Component } from '@angular/core';
import { SliderComponent } from '../../layouts/slider/slider.component';
import { InfoComponent } from '../../layouts/info/info.component';
import { ShowgalleryComponent } from '../../layouts/showgallery/showgallery.component';
import { TopnavComponent } from '../../layouts/topnav/topnav.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FootslideComponent } from '../../layouts/footslide/footslide.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,InfoComponent,ShowgalleryComponent,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
