import { Component,OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean = false;
  constructor(private authService : AuthService, private router: Router, private recipeService: RecipeService){}
 ngOnInit(): void{
  this.authService.authState.subscribe(isLoggedIn => {
    this.isSignedIn = isLoggedIn;
  });
 }
 selectCategory(category: string){
  this.router.navigate(['/recipes'],{queryParams: {category:category}});
 }
 logout(){
  this.authService.logout();
  this.router.navigate(['/login']);
 }
}
