import { Component } from '@angular/core';
import { SliderComponent } from '../../Components/slider/slider.component';
import { InfoComponent } from '../../Components/info/info.component';
import { ShowgalleryComponent } from '../../Components/showgallery/showgallery.component';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,InfoComponent,ShowgalleryComponent,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
