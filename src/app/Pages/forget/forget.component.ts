import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ForgetidpasswordComponent } from './forgetidpassword/forgetidpassword.component';
import { TopnavComponent } from '../../layouts/topnav/topnav.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FootslideComponent } from '../../layouts/footslide/footslide.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [RouterLink,ForgetpasswordComponent,ForgetidpasswordComponent,TopnavComponent,HeaderComponent,NavbarComponent,FootslideComponent,FooterComponent],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {

  img:boolean=true;
  //  Pass Compo load
  passvar:boolean=false;
  Passload(){
    this.passvar=true;
    this.idpassvar=false;
// img
this.img=false;
  }
// IdPass Compo load
idpassvar:boolean=false;
Idpassload(){
  this.idpassvar=true;
  this.passvar=false;
  // img
this.img=false;
}
}

