
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';


@Component({
  selector: 'app-contactus',
  standalone:true,
  imports:[TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent,ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactForm:FormGroup;
  FormData:any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required], // Required field
      email: ['', [Validators.required, Validators.email]], // Required, valid email format
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/),Validators.minLength(10),Validators.maxLength(10)]], // Required, phone number format (adjust pattern as needed)
      message: ['', [Validators.required, Validators.maxLength(1000)]], // Required, minimum 10 characters
    });
  }

  
  onSubmit() {

    if( this.contactForm.valid ) {
      this.FormData=this.contactForm.value;
      console.log(" Contact Form Data",this.FormData);
    // You can do something with the form data here if you need to send it somewhere
    }

    }

}
