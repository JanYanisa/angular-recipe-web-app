import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    // children: [{ path: ':recipe', component: RecipeItemComponent }],
  },

  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    // children: [
    //   { path: ':id', component: ServerComponent },
    //   { path: ':id/edit', component: EditServerComponent },
    // ],
  },
//   { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
