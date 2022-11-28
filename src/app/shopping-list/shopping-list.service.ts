import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
export class shoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>()
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
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}