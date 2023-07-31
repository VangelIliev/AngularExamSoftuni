import { Component,OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean = false;
  constructor(private authService : AuthService, private router: Router){}
 ngOnInit(): void{
  this.authService.authState.subscribe(isLoggedIn => {
    this.isSignedIn = isLoggedIn;
  });
 }
 logout(){
  this.authService.logout();
  this.router.navigate(['/login']);
 }
}
