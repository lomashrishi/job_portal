import { Component, OnInit } from '@angular/core';
import { UserSideNavComponent } from '../user-side-nav/user-side-nav.component';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../../Services/login/login.service';
import { UserProfileService } from '../../Services/UserProfile/user-profile.service';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [UserSideNavComponent,RouterLink,CommonModule,UserHeaderComponent],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent implements OnInit{
  userInfo: any = {};
  imgBase='http://localhost:3000/Uploads/Profile-Sign/';


  constructor(private loginService: LoginService, public UserProfileService:UserProfileService) { }


  // Call logout Function 
  onLogout(): void {
    this.loginService.logout();
  }


  // user Profile
getUserData(){
    this.UserProfileService.getCurrentUserInfo().subscribe((response: any) => {
      this.userInfo = response;
      // console.log("UserInfo=>",this.userInfo); 
  })
  }

  ngOnInit(): void{

    this.getUserData();
}
}