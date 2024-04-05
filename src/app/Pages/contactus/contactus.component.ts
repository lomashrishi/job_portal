
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactForm:FormGroup;

  constructor(private Fb: FormBuilder) {
    this.contactForm =this.Fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  
  onSubmit() {
    console.log(this.contactForm);
    }

}
