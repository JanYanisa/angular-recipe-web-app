import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[]
  constructor(private shoppingListService:shoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged
    .subscribe((ingredients: Ingredients[])=>{
      this.ingredients = ingredients
    })
  }
}
