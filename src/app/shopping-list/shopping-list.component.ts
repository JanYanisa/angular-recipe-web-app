import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Caramel', 10),
    new Ingredients('Donut', 12),
  ];
  constructor() {}

  ngOnInit(): void {}
  addIngredient(newIngredient) {
    this.ingredients.push(newIngredient);
  }
}
