import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { myRecipesResolver } from './my-recipes.resolver';

describe('myRecipesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => myRecipesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
