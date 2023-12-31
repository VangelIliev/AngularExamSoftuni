import { Component, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent{
  @ViewChild('addForm') addForm!: NgForm; 
  ingredient: string = '';
  quantity: number = 0;
  quantityType: string = '';
  recipeIngredients = [];
  ingredientsList: { ingredient: string, quantity: number }[] = [];
  constructor(private recipeService: RecipeService, private router: Router){

  }
  addIngredient() {
    if (this.ingredient != null && this.quantity !== null) {
      const newIngredient = {
        ingredient: this.ingredient,
        quantity: this.quantity,
        quantityType:this.quantityType
      };

      this.ingredientsList.push(newIngredient);
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
      var newGuid = this.recipeService.generateGuid();
      if(recipeName != "" && recipeImage != "" && recipeCategory != "" && recipePreparation != 0 && recipeServings != 0 && recipeDescription != "" && this.ingredientsList != null){
        this.recipeService.addRecipe(
          {
            User:uid,
            Name:recipeName,
            Image:recipeImage,
            Category:recipeCategory,
            Preparation:recipePreparation,
            Servings:recipeServings,
            Description:recipeDescription,
            UserEmail:email,
            Ingredients:this.ingredientsList,
            RecipeId: newGuid
          }).then(() => {
            this.router.navigate(['/recipes']);
          })
          .catch(error => {
            alert('Error adding data to Firestore: ' + error);
          });
      }
      else{
        alert('you forgot to provide a field ');
      }
    
    }
    else{
      alert('user not found');
    }
  }
}
