import { Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    // type Recipe[] means array of Class Recipe, which was import from src\app\recipes\recipe.model.ts as declare above
    private recipes: Recipe[] = [
    new Recipe(
      'Banana cake loaf',
      'Banana cake loaf description for Banana cake loaf',
      'https://tse2.mm.bing.net/th?id=OIP.tDpTb_hQ41YG7yFw7tYfGwHaLH&pid=Api&P=0',
      [new Ingredients('Flour', 5),
        new Ingredients('Sugar', 6),
        new Ingredients('Nuts', 20)]
    ),
    new Recipe(
      'Test Recipe2',
      'Test description for Test Recipe2',
      'https://i1.wp.com/www.frugelegance.com/wp-content/uploads/2015/04/HumBirdCakeBundt6.jpg',
      [new Ingredients('Cream', 10),
        new Ingredients('Sugar',6)]
    ),
  ];

  constructor(private slService: shoppingListService){}
  getRecipes() {
    // return new copy of this.recipes, so no direct access 
    return this.recipes.slice()
  }

  getRecipe(id:number){
    return this.recipes[id]
  }
  addIngredientToSl(ingredients: Ingredients[]){
    this.slService.addIngredients(ingredients)
  }
}