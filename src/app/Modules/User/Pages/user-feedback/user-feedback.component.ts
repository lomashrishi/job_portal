import { Component } from '@angular/core';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserFeedbackService } from '../../Services/UserFeedback/user-feedback.service';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserFooterComponent,ReactiveFormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.css'
})
export class UserFeedbackComponent {

  contactForm:FormGroup;
  serverResponse:any;

  constructor(private Fb: FormBuilder, public UserFeedbackService:UserFeedbackService, private toast: NgToastService) {
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
     this.UserFeedbackService.sendFeedback(FormData).subscribe(response => {
          this.serverResponse = response.messages;
          this.toast.success({detail:"Success Message",summary:this.serverResponse,duration:5000, position:'topRight'});
          this.contactForm.reset(); // Reset form after successful submission my form 
        }, error => {
          this.serverResponse = error.status;
          this.toast.error({detail:"Error Message",summary:"Failed:-"+this.serverResponse,duration:5000, position:'topRight'});     
              
        } );
    }

    
  }

}
