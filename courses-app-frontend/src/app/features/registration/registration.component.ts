import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(6)]),
    email : new FormControl('', [Validators.required, validateEmail]),
    password : new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

}

function validateEmail(control: AbstractControl): ValidationErrors | null {
  const regex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return regex.test(control.value) ? null : {'emailInvalid' : true};
}
