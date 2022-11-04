import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  // type Recipe[] menas array of Class Recipe, which was import from src\app\recipes\recipe.model.ts as declare above
  constructor() {}

  ngOnInit(): void {}
}
