import { Component } from '@angular/core';
import { SliderComponent } from '../../Components/slider/slider.component';
import { InfoComponent } from '../../Components/info/info.component';
import { ShowgalleryComponent } from '../../Components/showgallery/showgallery.component';
import { TopnavComponent } from '../../layouts/topnav/topnav.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FootslideComponent } from '../../layouts/footslide/footslide.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { JobTypeComponent } from '../../Components/job-type/job-type.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,InfoComponent,ShowgalleryComponent,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent,JobTypeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
