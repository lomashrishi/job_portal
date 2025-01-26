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
  imports: [UserNavComponent, UserSideNavComponent, UserFooterComponent, ReactiveFormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {

  FeedbackForm: FormGroup;
  serverResponse: any;
  userInfo: any;

  constructor(
    private fb: FormBuilder,
    public userProfileService: UserProfileService,
    public userFeedbackService: UserFeedbackService,
    private toast: NgToastService
  ) {
    this.FeedbackForm = this.fb.group({
      Registration_No: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,3}$'), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(10)]],
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  onSubmitFeedback() {
    if (this.FeedbackForm.valid) {
      const formData = this.FeedbackForm.value;
      this.userFeedbackService.sendFeedback(formData).subscribe(
        response => {
          this.serverResponse = response.message;
          this.toast.success({ detail: "Success Message", summary: this.serverResponse, duration: 5000, position: 'topRight' });
          this.FeedbackForm.reset();
        },
        error => {
          this.serverResponse = error.status;
          this.toast.error({ detail: "Error Message", summary: "Failed: " + this.serverResponse, duration: 5000, position: 'topRight' });
        }
      );
    }
  }

  getUserData() {
    this.userProfileService.getCurrentUserInfo().subscribe((response: any) => {
      this.userInfo = response;
      this.FeedbackForm.get('Registration_No')?.setValue(this.userInfo.Registration_No);
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
