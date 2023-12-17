import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { FavoritesService } from '../../services/favorites.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {ngSkipHydration: 'true'},

})
export class HomeComponent {
    recipes: any[] = [];

  searchTerm: string = '';

  constructor(protected recipeService: RecipeService,private router: Router,private favoritesService:FavoritesService,private render:Renderer2,private toastr: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  ngOnInit(): void {
    this.recipeService.getRandomRecipes().subscribe(data => {
      this.recipeService.recipes= data.recipes;
    });
  }




  showRecipeDetails(recipeId: string): void {
    this.router.navigate(['/product-details', recipeId]);
  }
  addToFavorites(recipe: any,e:any): void{
    if(e.target.classList.contains('added')){
      this.removeFromFavorites(recipe,e)
      this.toastr.success(`the recipe ${recipe.title} removed successfuly`)
      return
    }
    this.favoritesService.addToFavorites(recipe)
    this.render.addClass(e.target,"added")
    this.toastr.success(`the recipe ${recipe.title} added successfuly`)

    return
  }
  removeFromFavorites(recipe:any,e:any){
      this.favoritesService.removeFromFavorites(recipe)
      this.render.removeClass(e.target,"added")
  }
}
