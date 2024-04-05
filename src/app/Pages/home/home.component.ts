import { Component } from '@angular/core';
import { SliderComponent } from '../../layouts/slider/slider.component';
import { InfoComponent } from '../../layouts/info/info.component';
import { ShowgalleryComponent } from '../../layouts/showgallery/showgallery.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,InfoComponent,ShowgalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
