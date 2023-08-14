import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(){
    if(localStorage.getItem('user') != null){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }
  } 
   loginUser(){
    const emailValue = this.email?.value;
    const passwordValue = this.password?.value;
    if(emailValue != undefined && passwordValue != undefined){
      this.authService.signIn(emailValue, passwordValue).then(()=>{
        this.isSignedIn = true;
        this.router.navigate(['/recipes']);
      })
      .catch(error => {
        this.isSignedIn = false;
        console.log(error);
      });
    }
  }
}
