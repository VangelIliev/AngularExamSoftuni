import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User{
  email: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  };
  onSubmit(loginForm: NgForm){
    if(loginForm.valid){
      console.log(this.user);
    }
    else{
      alert("Your form isn't valid");
    }
  }
}
