import { Component, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent{
  @ViewChild('addForm') addForm!: NgForm; 
  ingredient: string = '';
  quantity: number = 0;
  recipeIngredients = [];
  ingredientsList: { ingredient: string, quantity: number }[] = [];
  constructor(private recipeService: RecipeService){

  }
  addIngredient() {
    if (this.ingredient && this.quantity !== null) {
      const newIngredient = {
        ingredient: this.ingredient,
        quantity: this.quantity
      };

      this.ingredientsList.push(newIngredient);
      debugger
      // Clear the input fields
      this.ingredient = '';
      this.quantity = 0;
    }
  }
  onSubmit() {
    // Access the form values and add the recipe to your database or perform other actions.
    var {recipeName, recipeImage, recipeCategory, recipePreparation, recipeServings, recipeDescription} = this.addForm.value;
    var user = localStorage.getItem('user') ;
    if(user != null){
      const parsedObject = JSON.parse(user);
      var uid = parsedObject.uid;
      var email = parsedObject.email;
      this.recipeService.addRecipe(
      {
        User:uid,
        Name:recipeName,
        Image:recipeImage,
        Category:recipeCategory,
        Preparation:recipePreparation,
        Servings:recipeServings,
        Description:recipeDescription,
        UserEmail:email
      }).then(() => {
        alert("Data has been added to Firestore");
      })
      .catch(error => {
        alert('Error adding data to Firestore: ' + error);
      });
    }
    else{
      alert('user not found');
    }
  }
}
