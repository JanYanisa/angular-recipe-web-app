import { Recipe } from "./recipe.model";
export class RecipeService {
    // type Recipe[] means array of Class Recipe, which was import from src\app\recipes\recipe.model.ts as declare above
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test description for Test Recipe',
      'https://tse2.mm.bing.net/th?id=OIP.tDpTb_hQ41YG7yFw7tYfGwHaLH&pid=Api&P=0'
    ),
    new Recipe(
      'Test Recipe2',
      'Test description for Test Recipe2',
      'https://i1.wp.com/www.frugelegance.com/wp-content/uploads/2015/04/HumBirdCakeBundt6.jpg'
    ),
  ];

  getRecipes() {
    // return new copy of this.recipes, so no direct access 
    return this.recipes.slice()
  }
}