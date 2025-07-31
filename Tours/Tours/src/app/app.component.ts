import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { flatMap } from 'rxjs';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  userForm: FormGroup;
  value:any;
  homeBanner = true;
  aboutBanner= false;
  contactBanner= false;
  serviceBanner = false;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email:['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      const modalEl = document.getElementById('myModal');
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    } else {
      this.userForm.markAllAsTouched();
      console.log("invalid")
    }
  }

  navValue(value:string){
    console.log(value)
    if(value == 'home'){
      this.homeBanner= true;
      this.aboutBanner= false;
      this.contactBanner = false;
      this.serviceBanner = false;
    }
    else if(value == 'about'){
      this.homeBanner= false;
      this.aboutBanner= true;
      this.contactBanner= false;
      this.serviceBanner = false;
      console.log('it is working')
    }
    else if(value== 'contact'){
      this.homeBanner=false;
      this.aboutBanner= false;
      this.contactBanner = true;
      this.serviceBanner = false;
    }
  }
}
