import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [NgClass],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
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
