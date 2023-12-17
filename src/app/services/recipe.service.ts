import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = '6260e48832cd42ac9eff7bbea700548c';
  private apiUrl = 'https://api.spoonacular.com/recipes/';
  recipes: any[]=[];


  constructor(private http: HttpClient) {
  }

  getRandomRecipes(): Observable<any> {
    const url = `${this.apiUrl}/random?apiKey=${this.apiKey}&number=5`;
    return this.http.get(url);
  }

  searchRecipes(query: string): Observable<any> {
    const url = `${this.apiUrl}/complexSearch?apiKey=${this.apiKey}&query=${query}`;
    return this.http.get(url);

  }

  getRecipeDetails(recipeId: any): Observable<any> {
    const url = `${this.apiUrl}/${recipeId}/information?apiKey=${this.apiKey}`;
    return this.http.get(url);

  }
}
