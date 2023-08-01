import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // Add more form controls for other recipe details here
    });
  }
  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }

    // Access the form values and add the recipe to your database or perform other actions.
    const recipeData = this.recipeForm.value;
    console.log(recipeData); // Replace this with your logic to save the recipe
    // You can call a service to save the recipe data to your backend or use any other approach.
  }
}
