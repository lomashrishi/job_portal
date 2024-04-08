import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from '../../layouts/topnav/topnav.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FootslideComponent } from '../../layouts/footslide/footslide.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FontAwesomeModule,RouterLink,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
visible:boolean=true;
changetype:boolean=true;

viewpass(){
  this.visible = !this.visible
  this.changetype = !this.changetype; 
}

// Captcha Code 
captchaText: string = '';
  generateCaptcha(): void {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&abcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 8; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    } 
    this.captchaText = captcha;
  }
  ngOnInit() {
    this.generateCaptcha(); // Generate captcha on component initialization
  }
//Captcha Code Close 





}
