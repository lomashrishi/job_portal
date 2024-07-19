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
import { LoginService } from '../../Services/login/login.service';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule,RouterLink,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
LoginForm :FormGroup;
serverResponse:any;
Token:any;

 constructor( Fb:FormBuilder, public LoginService:LoginService,private toast:NgToastService,private router: Router ){
  this.LoginForm = Fb.group({
    email:['', [Validators.email,Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    mobile:['',[Validators.minLength(10),Validators.maxLength(10),Validators.required, Validators.pattern(/^\d+$/),Validators.minLength(10),Validators.maxLength(10) ]],
    password:['',[Validators.required,Validators.maxLength(16),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?])[A-Za-z\\d!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?]{8,}$')]], 
    captcha_input:['',[Validators.minLength(8),Validators.maxLength(8),Validators.required,]]
  })
 }
// Submmit If That is Form Valid
onSubmit(){
  if(this.LoginForm.valid){
    if(this.captchaText===this.LoginForm.value.captcha_input){
      const LoginFormData = this.LoginForm.value;
      // debugger
      this.LoginService.sendLogin(LoginFormData).subscribe(response => {
        this.serverResponse = response.message;
        if(response.token){
          this.Token = response.token; //Token Recived From Bakend
                  // alert(this.Token);
        localStorage.setItem("token",response.token); //store in local storage in browser 
        }

        // Response MsG
        const Toast = Swal.mixin({toast: true,position: "top-end",showConfirmButton: false,timer: 3000,timerProgressBar: true,
          didOpen: (toast) => {toast.onmouseenter = Swal.stopTimer;toast.onmouseleave = Swal.resumeTimer;}});
        Toast.fire({icon: "success",title: "Successfully...",text:this.serverResponse.message});
        // this.LoginForm.reset(); // Reset form after successful submission my form 
            // Redirect to /user route after successful login
          
            this.router.navigate(['/user-dashboard']);
      }, error => {
        this.serverResponse = error.message;    
        Swal.fire({icon: "error",title: "Oops...",text:"Failed:-"+this.serverResponse.message,timer:3000, footer: '<a routerLink="/register"><small><b>New Users Must Registered Before Login.</b></small></a>'});
      } );
  
    }
    else{
      this.toast.error({detail:"Error Message",summary:"Failed:-"+"Captcha Code Is Not Valid !..",duration:5000, position:'topRight'});     
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
