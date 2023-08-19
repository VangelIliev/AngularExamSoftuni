import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false;
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  })
  get email(){
    return this.signInForm.get('email');
  }
  get password(){
    return this.signInForm.get('password');
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

  onSignup(){
    const emailValue = this.email?.value;
    const passwordValue = this.password?.value;
    if(emailValue != undefined && passwordValue != undefined){
      this.authService.signUp(emailValue, passwordValue).then(()=>{
        this.isSignedIn = true;
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.isSignedIn = false;
        if(error.code === "auth/email-already-in-use"){
          alert('There is a user registered with that email');
        }
      });
  }
}
}
