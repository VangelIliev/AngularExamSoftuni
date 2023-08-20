import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  recipeId: string = '';
  canRemove:boolean = false;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}
  removeRecipe(){
    debugger
    this.recipeService.removeRecipe(this.recipe.id).then((data: null) => {    
        this.router.navigate(['/recipes']);     
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.recipeId = recipeId; // Store the recipeId in the component property
      this.recipeService.getRecipeById(recipeId).subscribe(data => {
        this.recipe = data[0];
        debugger;
        var user = localStorage.getItem('user');
        if(user != null){
          const parsedObject = JSON.parse(user);
          var email = parsedObject.email;
          this.canRemove = this.recipe.UserEmail == email;
        }
      });
    });
  }
}

