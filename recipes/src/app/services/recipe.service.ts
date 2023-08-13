import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RecipeService{
    constructor(private firestore: AngularFirestore) { }

    addRecipe(data: any): Promise<any> {
        return this.firestore.collection('recipes').add(data);
    }

    getAllRecipes(): Observable<any[]> {
        return this.firestore.collection('recipes').valueChanges();
    }

    getMyRecipes(uid:String): Observable<any[]>{
        return this.firestore.collection('recipes', ref => ref.where('user', '==', uid)).valueChanges();
    }
}