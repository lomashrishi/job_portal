import { Component } from '@angular/core';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserProfileService } from '../../Services/UserProfile/user-profile.service';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserChangePasswordService } from '../../Services/UserChangePassword/user-change-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-change-password',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserFooterComponent,ReactiveFormsModule],
  templateUrl: './user-change-password.component.html',
  styleUrl: './user-change-password.component.css'
})
export class UserChangePasswordComponent {
  passwordForm: FormGroup; //form data
  userInfo:any;

  constructor(private Fb: FormBuilder,public UserProfileService:UserProfileService, public UserChangePasswordService:UserChangePasswordService) { 
    this.passwordForm = this.Fb.group({
      Registration_No: ['',[Validators.required]],
      oldPassword: ['', [Validators.maxLength(16),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?])[A-Za-z\\d!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?]{8,}$')]],
      newPassword: ['', [Validators.maxLength(16),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?])[A-Za-z\\d!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?]{8,}$')]],
      confirmPassword: ['', [Validators.maxLength(16),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?])[A-Za-z\\d!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?]{8,}$')]]
      }, {validators: [this.matchPasswords]});
  }

  matchPasswords(formGroup: FormGroup): any {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { 'passwordsDoNotMatch': true };
  }
// Submit For Change
  onSubmit(): void {
    this.UserChangePasswordService.changePassword(this.passwordForm.value).subscribe(
      response => {
       const responseMsg:any= response.message;
        Swal.fire({ icon: 'success',title: 'Password Updated',text:responseMsg});
      },
      error => {
        const responseMsg:any= error.error.message;
        Swal.fire({ icon: 'error', title: 'Update Failed', text: responseMsg });
      }
    );
  } 
// For Registration No
  getUserData(){
    this.UserProfileService.getCurrentUserInfo().subscribe((response: any) => {
      this.userInfo = response;
        // Directly patch the form with user data
      this.passwordForm.get('Registration_No')?.setValue(this.userInfo.Registration_No);
      // console.log("UserInfo=>",this.userInfo); 
  })
  }
  
  // Auto Call Function
    ngOnInit():void {
      this.getUserData();
    }

}


