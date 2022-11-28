import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[]
  private ingredientsChanged$ : Subscription;
  constructor(private shoppingListService:shoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.ingredientsChanged$ = this.shoppingListService.ingredientsChanged
    .subscribe((ingredients: Ingredients[])=>{
      this.ingredients = ingredients
    })
  }
  ngOnDestroy(): void {
    this.ingredientsChanged$ && this.ingredientsChanged$.unsubscribe()
  }
}
