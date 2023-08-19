import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipeData: any;
  constructor(private router: Router, private recipeService: RecipeService){}
  get recipeName(){
    return this.recipeData.Name;
  }
  get isLoggedIn(){
    var isLoggedIn = localStorage.getItem('user');
    if(isLoggedIn != null){
      return true;
    }
    return false;
  }
  Name:string = '';
  Image:string = '';
  Category:string = '';
  Preparation:number = 0;
  Servings:number = 0;
  Description:string = '';
  User:string = '';
  ngOnInit(): void {

    this.Name = this.recipeData.Name;
    this.Image = this.recipeData.Image;
    this.Category = this.recipeData.Category;
    this.Preparation = this.recipeData.Preparation;
    this.Servings = this.recipeData.Servings;
    this.Description = this.recipeData.Description;
    this.User = this.recipeData.UserEmail;
  }
  viewRecipeDetails() {
    const recipeId = this.recipeData.RecipeId;

    this.recipeService.getRecipeById(recipeId).subscribe(recipe => {
      debugger
      const id = recipe[0].RecipeId;
      // Navigate to the RecipeDetailsComponent with the recipe data
      this.router.navigate(['/recipe-details'], { state: id });
    });
  }
}
