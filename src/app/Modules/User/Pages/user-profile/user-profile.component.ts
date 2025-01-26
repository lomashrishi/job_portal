import { Component, OnInit } from '@angular/core';
import { UserHeaderComponent } from '../../Layouts/user-header/user-header.component';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserProfileService } from '../../Services/UserProfile/user-profile.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserNavComponent,UserSideNavComponent,UserHeaderComponent,UserFooterComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {



  userInfo: any = []; //for user info get
  imgBase='http://localhost:3000/Uploads/Profile-Sign/';  //img base url

  // Forms
  tenth_form :FormGroup; //10th
  twelth_form :FormGroup;
  diploma_form :FormGroup;
  graduation_form :FormGroup;
  post_graduation_form :FormGroup;


constructor(public UserProfileService:UserProfileService, public Fb:FormBuilder){
  this.tenth_form = this.Fb.group({
    Registration_No: ['',[Validators.required]],
    BoardName: ['', [Validators.required]],
    CourseName: ['', [Validators.required]],
    RollNumber: ['', [Validators.required]],
    PassingYear: ['', [Validators.required]],
    Percentage: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    Marksheet: [null]
  });
  this.twelth_form = new FormGroup({});
  this.diploma_form = new FormGroup({});
  this.graduation_form = new FormGroup({});
  this.post_graduation_form = new FormGroup({});

}





// 10th
onSubmit10th(): void {
  if (this.tenth_form.valid) {
    const formData = new FormData();
    formData.append('Registration_No', this.tenth_form.get('Registration_No')?.value);
    formData.append('BoardName', this.tenth_form.get('BoardName')?.value);
    formData.append('CourseName', this.tenth_form.get('CourseName')?.value);
    formData.append('RollNumber', this.tenth_form.get('RollNumber')?.value);
    formData.append('PassingYear', this.tenth_form.get('PassingYear')?.value);
    formData.append('Percentage', this.tenth_form.get('Percentage')?.value);
    formData.append('Marksheet', this.tenth_form.get('Marksheet')?.value);

    // Handle form submission logic here
    console.log('Form Submitted', this.tenth_form.value);
  } else {
    this.tenth_form.markAllAsTouched();
  }
}


getUserData(){
  this.UserProfileService.getCurrentUserInfo().subscribe((response: any) => {
    this.userInfo = response;
      // Directly patch the form with user data
    // Set form control values individually
    this.tenth_form.get('Registration_No')?.setValue(this.userInfo.Registration_No);
    // console.log("UserInfo=>",this.userInfo); 
})
}


  ngOnInit():void {
    this.getUserData();
  }

}

