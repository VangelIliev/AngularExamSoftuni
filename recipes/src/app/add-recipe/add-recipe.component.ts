import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent{
  @ViewChild('addForm') addForm!: NgForm; 
  onSubmit() {
    // Access the form values and add the recipe to your database or perform other actions.
    var {recipeName, recipeImage, recipeCategory, recipePreparation, recipeServings, recipeDescription} = this.addForm.value;
    console.log(recipeName); // Replace this with your logic to save the recipe
    // You can call a service to save the recipe data to your backend or use any other approach.
  }
}
