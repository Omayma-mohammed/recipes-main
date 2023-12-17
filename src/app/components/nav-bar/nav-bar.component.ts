import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [BrowserModule ,
            FormsModule , RouterModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  searchTerm: string = '';
  recipes: any[] = [];
 constructor(private recipeService: RecipeService) { }

  search(): void {
    this.recipeService.searchRecipes(this.searchTerm).subscribe(data => {
      console.log(data)
      this.recipeService.recipes = data.results;
    });
  }

}
