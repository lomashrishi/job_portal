import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../Services/register/register.service';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, TopnavComponent, HeaderComponent, NavbarComponent, FootslideComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // for form data
  registerForm: FormGroup;
  // for server response message 
  serverResponse: any;
// image uploads
ViewSignUrl: any | null = null;
ViewProfileUrl:any | null =null;


// Define the allowed file types and size range
 allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];


  constructor(private FBuilder: FormBuilder, public RegisterService: RegisterService,private toast:NgToastService) {
    this.registerForm = this.FBuilder.group({
      Name: ['Lomash', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,2}$'), Validators.maxLength(30)]],
      Dob: ['', [Validators.required,]],
      Gender: ['Male', [Validators.required]],
      Category: ['GENERAL', [Validators.required]],
      MaritalStatus: ['Married', [Validators.required]],
      Age: ['19', [Validators.required]],
      RelativeType: ['Father', [Validators.required]],
      RelativeName: ['Ram', [Validators.required,Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,2}$'), Validators.maxLength(30)]],
      MotherName: ['Rani', [Validators.required,Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,2}$'), Validators.maxLength(30)]],
      Nationality: ['Indian', [Validators.required]],
      DomicileCG: ['Yes', [Validators.required]],
      DomecileDistrict: ['Dhamtari', [Validators.required]],
      Disabilities: ['No', [Validators.required]],
      FamilyYearlyIncome: ['80000', [Validators.required]],
      Email: ['Ok@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      Mobile: ['9977679866', [Validators.required]],
      Password: ['Rok#2024', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?])[A-Za-z\\d!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?]{8,}$')
    ]],
      RepeatPassword: ['Rok#2024', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?])[A-Za-z\\d!@#$%^&*()_+\\-\\[\\]{};:\'",.<>/?]{8,}$')
    ]],
      ProfileImage: [null, [Validators.required,]],
      SignatureImage: [null, [Validators.required,]],
      HouseNo: ['900', [Validators.required]],
      Street: ['Raipur', [Validators.required]],
      CityVillage: ['Dhamtari', [Validators.required]],
      State: ['', [Validators.required]],
      District: ['', [Validators.required]],
      PinCode: ['', [Validators.required,Validators.pattern(/^[1-9][0-9]{5}$/)]],
      DeclarationCheck: [false, [Validators.requiredTrue]],
      InputCaptcha: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      InputOtp: ['997767', [Validators.required]]
    });
  }

  onSubmit() {
    // Handle form submission
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const RegisterFormData = new FormData();  
      RegisterFormData.append('ProfileImage', this.registerForm.value.ProfileImage);
      RegisterFormData.append('SignatureImage', this.registerForm.value.SignatureImage);

      Object.keys(this.registerForm.value).forEach(key => {
        if (key !== 'ProfileImage' && key !== 'SignatureImage') {
          RegisterFormData.append(key, this.registerForm.value[key]);
        }
      });
     // Testing Final Data
      console.log("Final Value =>",RegisterFormData);
      RegisterFormData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      this.RegisterService.UserRegister(RegisterFormData).subscribe(response => {
        this.serverResponse = response.message;
        // lib msg
        this.registerForm.reset(); // Reset form after successful submission my form 
      }, error => {
        this.serverResponse = error.error.message;
        // lib msg
        alert(this.serverResponse);
      });
    }
  }

// Image Pick With Validation 
// Validate image type and size
private validateImage(file: File): boolean {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 150 * 1024; // 150 KB
  const minSize = 30 * 1024; // 30 KB
  if (!allowedTypes.includes(file.type)) {
    alert('Only JPG, JPEG, and PNG Formats Are Allowed.');
    return false;
  }

  if (file.size < minSize || file.size > maxSize) {
    alert('Image Size Must Be Between 30 KB And 150 KB.');
    return false;
  }

  return true;
}

// Select Profile Image
onChangeProfileImage(event: any) {
  const Imgfile = event.target.files?.[0];
  if (Imgfile && this.validateImage(Imgfile)) {
    const reader = new FileReader();
    reader.readAsDataURL(Imgfile);
    reader.onload = () => {
      this.ViewProfileUrl= reader.result;
    };
    this.registerForm.get('ProfileImage')?.setValue(Imgfile);
  } else {
    this.ViewProfileUrl = null;
    this.registerForm.get('ProfileImage')?.setValue(null);
  }
}


// Select Signature Image
onChangeSignatureImage(event: any) {
  const Imgfile = event.target.files?.[0];
  if (Imgfile && this.validateImage(Imgfile)) {
    const reader = new FileReader();
    reader.readAsDataURL(Imgfile);
    reader.onload = () => {
      this.ViewSignUrl= reader.result;
    };
    this.registerForm.get('SignatureImage')?.setValue(Imgfile);
  } else {
    this.ViewSignUrl = null;
    this.registerForm.get('SignatureImage')?.setValue(null);
  }
}




// PinCode To Distict Name 
getMyPin() {
      const MyPinCode = this.registerForm.get('PinCode')?.value;
      if(MyPinCode){
        this.RegisterService.getPinCode(MyPinCode).subscribe(response => {
          if (response[0].Status === 'Success') {
            const postOffice = response[0].PostOffice[0];
              this.registerForm.patchValue({ District:postOffice.District});
              this.registerForm.patchValue({ State:postOffice.Circle});
          }
        });
      }
  }

// Max Dob Date
todayDate(): string {
  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); //18 check
  return eighteenYearsAgo.toISOString().split('T')[0];
}


  // // Age Uapdate 
  calculateAge() {
    const DobValue = this.registerForm.get('Dob')?.value;
    if (DobValue) {
      const Dob = new Date(DobValue);
      const today = new Date();
      let age = today.getFullYear() - Dob.getFullYear();
      const monthDiff = today.getMonth() - Dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < Dob.getDate())) {
        age--;
      }
      this.registerForm.patchValue({ Age: age });
    }
  }

  // Captcha Code 
  captchaText: string = '';
  generateCaptcha(): void {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&abcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 8; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.captchaText = captcha;
  }

// Validate Captcha 
MatchCaptcha(){
  if(this.captchaText===this.registerForm.value.InputCaptcha)
    {
      this.registerForm.patchValue({InputCaptcha:''});
      this.registerForm.get('InputCaptcha')?.setErrors(null); // Clear any previous errors
  } else {
    this.registerForm.get('InputCaptcha')?.setValue(null);
    this.registerForm.get('InputCaptcha')?.setErrors({ invalid: true });
    alert("incorrect captcha");
    this.generateCaptcha(); // Generate captcha on 
  }
}
  // Captcha Close 

  // Auto Call Function on Loads 
ngOnInit() {
    this.generateCaptcha(); // Generate captcha on component initialization
    this.getMyPin();// for pin code 
  }






}

