
import { Component,} from '@angular/core';
import {  FormBuilder,Validators,FormGroup, ReactiveFormsModule,} from '@angular/forms';

@Component({
  selector: 'app-forgetidpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetidpassword.component.html',
  styleUrl: './forgetidpassword.component.css'
})
export class ForgetidpasswordComponent {
  userForm: FormGroup;


  constructor(private Fb: FormBuilder) {
    this.userForm = this.Fb.group({
      name: ['', Validators.required],
    });
  }
  
  onSubmit() {
    // Handle form submission logic here
    console.log(this.userForm.value); // Example: log form data for debugging or sending to server
    // You can add further validation or data processing before submission
  }

}
