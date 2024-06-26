import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopnavComponent } from '../../Layouts/topnav/topnav.component';
import { HeaderComponent } from '../../Layouts/header/header.component';
import { NavbarComponent } from '../../Layouts/navbar/navbar.component';
import { FootslideComponent } from '../../Layouts/footslide/footslide.component';
import { FooterComponent } from '../../Layouts/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../Services/register/register.service';


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



  constructor(private FBuilder: FormBuilder, public RegisterService: RegisterService) {
    this.registerForm = this.FBuilder.group({
      Name: ['Lomash', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,2}$'), Validators.maxLength(30)]],
      Dob: ['', [Validators.required]],
      Gender: ['Male', [Validators.required]],
      Category: ['GENERAL', [Validators.required]],
      MaritalStatus: ['Married', [Validators.required]],
      Age: ['19', [Validators.required]],
      RelativeType: ['Father', [Validators.required]],
      RelativeName: ['Ram', [Validators.required,Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,2}$'), Validators.maxLength(30)]],
      MotherName: ['Rani', [Validators.required,Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+){0,2}$'), Validators.maxLength(30)]],
      Nationality: ['Indian', [Validators.required]],
      DomicileCG: ['', [Validators.required]],
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
      State: ['Chhattishgarh', [Validators.required]],
      District: ['Raipur', [Validators.required]],
      PinCode: ['493773', [Validators.required,Validators.pattern(/^[1-9][0-9]{5}$/)]],
      DeclarationCheck: [false, [Validators.requiredTrue]],
      InputCaptcha: ['', [Validators.required]],
      InputOtp: ['997767', [Validators.required]]
    });
  }

  // onSubmit() {
  //   console.log(this.registerForm.value);
  //   // Handle form submission
  //   if (this.registerForm.valid) {
  //     console.log(this.registerForm.value);
  //     // You can send the form data to your backend or handle it as per your requirement

  //     // Value Transfer Another Variable 
  //     const RegisterFormData = this.registerForm.value;
  //     this.RegisterService.sendRegister(RegisterFormData).subscribe(response => {
  //       this.serverResponse = response.message;
  //     // lib msg
  //       this.registerForm.reset(); // Reset form after successful submission my form 
  //     }, error => {
  //       this.serverResponse = error.message;
  // // lib msg
  //     });

  //   }
  // }






  onSubmit() {
    if (this.registerForm.valid) {
      const formData: FormData = new FormData();
  
      // Append regular form fields
      Object.keys(this.registerForm.value).forEach(key => {
        if (key !== 'ProfileImage' && key !== 'SignatureImage') {
          formData.append(key, this.registerForm.value[key]);
        }
      });
  
      // Append file inputs with null checks
      const profileImage = (this.registerForm.get('ProfileImage')?.value as FileList)[0];
      const signatureImage = (this.registerForm.get('SignatureImage')?.value as FileList)[0];
  
      if (profileImage && signatureImage) {
        formData.append('ProfileImage', profileImage, profileImage.name);
        formData.append('SignatureImage', signatureImage, signatureImage.name);
  
        this.RegisterService.sendRegister(formData).subscribe(
          response => {
            this.serverResponse = response.message;
            this.registerForm.reset(); // Reset form after successful submission
          },
          error => {
            this.serverResponse = error.message;
          }
        );
      } else {
        this.serverResponse = 'Profile Image and Signature Image are required';
      }
    }
  }
  












// PinCode To Distict Name 
OnInit(): void {
  this.registerForm.get('PinCode')?.valueChanges.subscribe(value => {
    if (this.registerForm.get('PinCode')?.valid) {
      this.RegisterService.getPinCode(value).subscribe(response => {
        if (response[0].Status === 'Success') {
          const postOffice = response[0].PostOffice[0];
          this.registerForm.patchValue({
            District: postOffice.District
          });
        }
      });
    }
  });
}








  // Select Image ProfileImage
  onChangeProfileImage(event: any) {
    const file = event.target.files?.[0];
    this.registerForm.get('ProfileImage')?.setValue(file || null);
  }
  // Select Image SignatureImage
  onChangeSignatureImage(event: any) {
    const file = event.target.files?.[0];
    this.registerForm.get('SignatureImage')?.setValue(file || null);
    
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.ViewSignUrl = e.target.result;
    };

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
ngOnInit() {
    this.generateCaptcha(); // Generate captcha on component initialization
  }
  // Captcha Close 





}

