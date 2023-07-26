// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
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
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
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
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
