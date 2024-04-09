import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

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
  // Captcha Close 



  calculateAge(): void {
    // const dobValue = this.userForm.get('dob').value;
    // if (dobValue) {
    //   const dob = new Date(dobValue);
    //   const today = new Date();
    //   const age = today.getFullYear() - dob.getFullYear();
    //   this.userForm.patchValue({ age });
    // }
  }


}

