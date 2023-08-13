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
  constructor(private recipeService: RecipeService){

  }
  onSubmit() {
    // Access the form values and add the recipe to your database or perform other actions.
    var {recipeName, recipeImage, recipeCategory, recipePreparation, recipeServings, recipeDescription} = this.addForm.value;
    var user = localStorage.getItem('user') ;
    if(user != null){
      const parsedObject = JSON.parse(user);
      var uid = parsedObject.uid;
      this.recipeService.addRecipe(
      {
        user:uid,
        Name:recipeName,
        Image:recipeImage,
        Category:recipeCategory,
        Preparation:recipePreparation,
        Servings:recipeServings,
        Description:recipeDescription
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
