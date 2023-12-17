import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];
  getFavorites(): any[] {
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      this.favorites = JSON.parse(favoritesData);
    }
    return this.favorites;
  }

  addToFavorites(recipe: any): void {
    this.favorites.push(recipe);
    this.updateLocalStorage();
  }
  removeFromFavorites(recipe: any){
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      this.favorites.splice(this.favorites.indexOf(JSON.stringify), 1);
    }
    this.updateLocalStorage()
  }
  private updateLocalStorage(): void {

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  constructor() { }
}
