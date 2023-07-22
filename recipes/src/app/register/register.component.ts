import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

interface User{
  email: string,
  password: string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: ''
  };
  onSubmit(registerForm: NgForm){
    if(registerForm.valid){
      console.log(this.user);
    }
    else{
      alert("Your form isn't valid");
    }
  }

}
