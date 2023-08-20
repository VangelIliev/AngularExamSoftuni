import { Component, ViewChild, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.scss']
})

export class UpdateRecipeComponent implements OnInit{
  @ViewChild('addForm') addForm!: NgForm; 
  recipe: any;
  recipeId: string = '';
  ingredient: string = '';
  quantity: number = 0;
  quantityType: string = '';
  recipeIngredients = [];
  recipeCategory:string= '';
  ingredientsList: { ingredient: string, quantity: number }[] = [];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.recipeId = recipeId; // Store the recipeId in the component property
      this.recipeService.getRecipeById(recipeId).subscribe(data => {

        this.recipe = data[0];
        this.ingredientsList = this.recipe.Ingredients;
        this.recipeCategory = this.recipe.Category;

        this.addForm.setValue({
          recipeCategory: this.recipeCategory
        })
      });
    });
  }
  addIngredient() {
    if (this.ingredient && this.quantity !== null) {
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
      this.recipeService.updateRecipe(
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
      }, this.recipe.id).then(() => {
        this.router.navigate(['/recipes']);
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
