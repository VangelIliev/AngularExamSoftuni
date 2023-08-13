import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  myRecipes: any[] = [];
  constructor(private recipeService : RecipeService){

  }
  ngOnInit(): void {
    var user = localStorage.getItem('user');
    if(user != null){
      const parsedObject = JSON.parse(user);
      var uid = parsedObject.uid;
      this.recipeService.getMyRecipes(uid).subscribe(data => {
        this.myRecipes = data;
        console.log(this.myRecipes);
      });
    }
  }


}
