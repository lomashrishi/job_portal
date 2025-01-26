
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { TopnavComponent } from '../../layouts/topnav/topnav.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FootslideComponent } from '../../layouts/footslide/footslide.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { ContactService } from '../../Services/contact/contact.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-contactus',
  standalone:true,
  imports:[TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent,ReactiveFormsModule,],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactForm:FormGroup;
  serverResponse:any;

  constructor(private Fb: FormBuilder, public contactService:ContactService, private toast: NgToastService) {
    this.contactForm = this.Fb.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,3}$'),Validators.maxLength(30)]], // Required field
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]], // Required, valid email format
      mobile: ['', [Validators.required, Validators.pattern(/^\d+$/),Validators.minLength(10),Validators.maxLength(10)]], // Required, phone number format (adjust pattern as needed)
      message: ['', [Validators.required, Validators.maxLength(1000)]] //
    });
  }


  onSubmit() {
    if( this.contactForm.valid ) {
    const FormData = this.contactForm.value;
     // You can do something with the form data here if you need to send it somewhere
     this.contactService.sendMessage(FormData).subscribe(response => {
          this.serverResponse = response.messages;
          this.toast.success({detail:"Success Message",summary:'Your Message Send Successfully...',duration:5000, position:'topRight'});
          this.contactForm.reset(); // Reset form after successful submission my form
        }, error => {
          this.serverResponse = error.status;
          this.toast.error({detail:"Error Message",summary:"Failed:-"+this.serverResponse,duration:5000, position:'topRight'});

        } );
    }


  }
}
