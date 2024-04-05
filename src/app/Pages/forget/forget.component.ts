import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ForgetidpasswordComponent } from './forgetidpassword/forgetidpassword.component';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [RouterLink,ForgetpasswordComponent,ForgetidpasswordComponent,],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {

  //  Pass Compo load 

  passvar:boolean=false;
  Passload(){
    this.passvar=true;
    this.idpassvar=false;
  }
// IdPass Compo load
idpassvar:boolean=false;
Idpassload(){
  this.idpassvar=true;
  this.passvar=false;
}
}

