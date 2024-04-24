import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule,FontAwesomeModule,RouterLink,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
LoginForm :FormGroup;

 constructor( Fb:FormBuilder){
  this.LoginForm = Fb.group({

    email:['', [Validators.email,Validators.required]],
    mobile:['',[Validators.minLength(10),Validators.maxLength(10),Validators.required, Validators.pattern(/^\d+$/)]],
    password:[''], 
    captcha_input:['',[Validators.minLength(8),Validators.maxLength(8),Validators.required,]]
  })

 }






onSubmit(){
  if(this.LoginForm.valid){
    if(this.captchaText===this.LoginForm.value.captcha_input){
      console.log(this.LoginForm.value);
    }
    else{
      alert("Captcha is not valid")
    }
  }
}











//  password toggle
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
