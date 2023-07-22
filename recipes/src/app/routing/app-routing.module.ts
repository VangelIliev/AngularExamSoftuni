import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { MyRecipesComponent } from '../my-recipes/my-recipes.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { NotFoundComponent } from '../not-found/not-found.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'recipes', component:RecipesComponent},
  { path: 'myRecipes', component:MyRecipesComponent},
  { path: 'recipeDetails', component:RecipeDetailsComponent},
  { path: 'addRecipe', component: AddRecipeComponent},
  { path: 'notFound', component: NotFoundComponent},
  { path: '', redirectTo: 'recipes', pathMatch:'full'},
  { path: '**', redirectTo: 'notFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
