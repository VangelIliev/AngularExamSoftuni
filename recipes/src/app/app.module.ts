import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddRecipeComponent,
    CategoryComponent,
    LoginComponent,
    MyRecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
