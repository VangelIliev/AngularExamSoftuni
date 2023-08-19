import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.recipeService.getRecipeseByCategory(category).subscribe(filteredRecipes => {
          this.recipes = filteredRecipes;
        });
      } else {
        this.recipeService.getAllRecipes().subscribe(allRecipes => {
          this.recipes = allRecipes;
        });
      }
    });
  }
}

