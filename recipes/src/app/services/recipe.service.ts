import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable, from, map } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RecipeService{
    constructor(private firestore: AngularFirestore) { }

    generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      
    addRecipe(data: any): Promise<any> {
        return this.firestore.collection('recipes').add(data);
    }

    getAllRecipes(): Observable<any[]> {
        return this.firestore.collection('recipes')
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(action => {
                const id = action.payload.doc.id;
                const data = action.payload.doc.data() as any;
                return { id, ...data };
              });
            })
          );
      }

    getRecipesByUser(uid: string): Observable<any[]> {
        return this.firestore.collection('recipes', ref => ref.where('User', '==', uid))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(action => {
                const id = action.payload.doc.id;
                const data = action.payload.doc.data() as any;
                return { id, ...data };
              });
            })
          );
      }

      getRecipeseByCategory(category: string): Observable<any[]> {
        return this.firestore.collection('recipes', ref => ref.where('Category', '==', category))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(action => {
                debugger;
                const id = action.payload.doc.id;
                const data = action.payload.doc.data() as any;
                return { id, ...data };
              });
            })
          );
      }
      
      getRecipeById(recipeId: string): Observable<any> {
        debugger
        return this.firestore.collection('recipes', ref => ref.where('RecipeId', '==', recipeId))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(action => {
                const id = action.payload.doc.id;
                const data = action.payload.doc.data() as any;
                return { id, ...data };
              });
            })
          );
      }
      }
      