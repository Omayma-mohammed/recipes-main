import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [
    CommonModule ,
    FormsModule ,
  ],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
  favoriteRecipes: any[] = [];

  constructor(private favoritesService: FavoritesService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.favoriteRecipes = this.favoritesService.getFavorites();
    console.log(this.favoriteRecipes)
  }
  showRecipeDetails(recipeId: string): void {
    this.router.navigate(['/recipe', recipeId]);
  }

  removeFromFavorites(recipe:any){
    this.favoritesService.removeFromFavorites(recipe)
    this.toastr.success(`the recipe ${recipe.title} removed successfuly`)
  }


}
