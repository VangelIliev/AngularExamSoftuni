import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeName = params['id']; // Get the recipe ID from the route parameter
      // Fetch recipe details using the recipeId
      this.recipeService.getRecipeByName(recipeName).subscribe(data => {
        this.recipe = data[0];
      });
    });
  }
}

