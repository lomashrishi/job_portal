import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { RouterLink } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { ShowgalleryComponent } from '../showgallery/showgallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,InfoComponent,ShowgalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
