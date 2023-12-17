import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
const routes: Routes = [
  {path:'recipes',component:HomeComponent },
  {path:'' ,redirectTo:'recipes',pathMatch:'full' },
  {path:'favorites',component:FavouriteComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
