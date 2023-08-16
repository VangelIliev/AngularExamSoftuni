import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  recipes: any[] = [];

  get userHasRecipes():boolean{
    return this.recipes.length > 0;
  }
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {

    this.route.data.subscribe({
      next: (data) => {       
        const response = data['myRecipesResolver'];
        if(response){
          this.recipes = response;
        }
      }
    })
  }
}
