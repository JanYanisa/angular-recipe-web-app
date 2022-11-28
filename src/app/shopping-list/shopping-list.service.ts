import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";
export class shoppingListService {
    ingredientsChanged = new Subject<Ingredients[]>()
    private ingredients: Ingredients[] = [
        new Ingredients('Apple', 5),
        new Ingredients('Caramel', 10),
        new Ingredients('Donut', 15),
      ];
    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredient(newIngredient){
        this.ingredients.push(newIngredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(newIngredients:Ingredients[]){
        this.ingredients.push(...newIngredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}