import { Component, OnInit, Renderer2  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [

    CommonModule ,
    FormsModule ,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  host: {ngSkipHydration: 'true'},

})
export class ProductDetailsComponent {
  recipe: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private favoritesService: FavoritesService,
    private render:Renderer2,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeDetails(recipeId).subscribe(data => {
      this.recipe = data;
    });
  }

  addToFavorites(e:any): void{
    if(e.target.classList.contains('added')){
      this.removeFromFavorites(this.recipe,e)
      this.toastr.success(`the recipe ${this.recipe.title} removed successfuly`)
      return
    }
    this.favoritesService.addToFavorites(this.recipe)
    this.render.addClass(e.target,"added")
    this.toastr.success(`the recipe ${this.recipe.title} added successfuly`)

    return
  }
  removeFromFavorites(recipe:any,e:any){
      this.favoritesService.removeFromFavorites(recipe)
      this.render.removeClass(e.target,"added")
  }

}
