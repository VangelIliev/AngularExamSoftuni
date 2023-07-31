import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false;
  email:string = '';
  password:string= '';
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(){
    if(localStorage.getItem('user') != null){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }
  } 

  async onSignup(){
    await this.authService.signUp(this.email, this.password);
    if(this.authService.isLoggedIn){
      this.isSignedIn = true;
      this.email = '';
      this.password = '';
      this.router.navigate(['/login']);
    }
  }
}
