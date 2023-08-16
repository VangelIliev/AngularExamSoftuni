import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MyRecipesResolver implements Resolve<Observable<any>> {
  constructor(
      private recipeService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>{
    const user = localStorage.getItem('user');
    if(user){
      return this.recipeService.getMyRecipes(JSON.parse(user).uid);
    } else{
      return of();
    }
  }
}
