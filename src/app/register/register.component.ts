import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterComponent,RouterLink],
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

