import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipeData: any;

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
}
