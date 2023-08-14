import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService : RecipeService){

  }
  ngOnInit(): void {
      this.recipeService.getAllRecipes().subscribe(data => {
        this.recipes = data;
        console.log(this.recipes);
      });
    }
  }
