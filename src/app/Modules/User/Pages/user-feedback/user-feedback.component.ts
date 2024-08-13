import { Component, OnInit } from '@angular/core';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserFeedbackService } from '../../Services/UserFeedback/user-feedback.service';
import { UserProfileService } from '../../Services/UserProfile/user-profile.service';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserFooterComponent,ReactiveFormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.css'
})
export class UserFeedbackComponent implements OnInit {

  FeedbackForm:FormGroup;
  serverResponse:any;
  userInfo:any;

  constructor(private Fb: FormBuilder, public UserProfileService:UserProfileService, public UserFeedbackService:UserFeedbackService, private toast: NgToastService) {
    this.FeedbackForm = this.Fb.group({
      Registration_No: ['',[Validators.required]],
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,3}$'),Validators.maxLength(30)]], // Required field
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]], // Required, valid email format
      mobile: ['', [Validators.required, Validators.pattern(/^\d+$/),Validators.minLength(10),Validators.maxLength(10)]], // Required, phone number format (adjust pattern as needed)
      message: ['', [Validators.required, Validators.maxLength(1000)]] // 
    });
  }

  
  onSubmit() {
    if( this.FeedbackForm.valid ) {
    const FormData = this.FeedbackForm.value;
     // You can do something with the form data here if you need to send it somewhere
     this.UserFeedbackService.sendFeedback(FormData).subscribe(response => {
      this.serverResponse = response.message;
      // alert(this.serverResponse);
          this.toast.success({detail:"Success Message",summary: this.serverResponse ,duration:5000, position:'topRight'});
          this.FeedbackForm.reset(); // Reset form after successful submission my form 
        }, error => {
          this.serverResponse = error.status;
          this.toast.error({detail:"Error Message",summary:"Failed:-" + this.serverResponse ,duration:5000, position:'topRight'});     
              
        } );
    }

    
  }


// For Registration No
getUserData(){
  this.UserProfileService.getCurrentUserInfo().subscribe((response: any) => {
    this.userInfo = response;
      // Directly patch the form with user data
    this.FeedbackForm.get('Registration_No')?.setValue(this.userInfo.Registration_No);
    // console.log("UserInfo=>",this.userInfo); 
})
}



ngOnInit():void {
  this.getUserData();
}

}
