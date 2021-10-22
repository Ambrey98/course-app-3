import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email : '',
    password : ''
  };
  

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm) {
    this.user.email = myForm.value.email;
    this.user.password = myForm.value.password;

    this.authService.login(this.user);
    this.authService.isAuthorized$.subscribe(result => {
      if (result) {
        console.log('Successfully logged in');
      }
    })
  }

}
