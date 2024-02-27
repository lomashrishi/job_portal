import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './topnav/topnav.component'; // Import NavbarComponent
import {  } from "module";
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootslideComponent } from './footslide/footslide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopnavComponent,FooterComponent,HeaderComponent,NavbarComponent,FootslideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recruitment-Portal';
}
