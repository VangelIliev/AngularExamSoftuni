import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Output() isLogout = new EventEmitter<void>()
 constructor(public authService : AuthService){

 }
 ngOnInit(): void{}
 logout(){
  this.authService.logout();
 }
}
