import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedRl = new EventEmitter<Recipe>();
  // type Recipe[] means array of Class Recipe, which was import from src\app\recipes\recipe.model.ts as declare above
  recipes: Recipe[] = [
  ];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }
  onSelected(recipe: Recipe) {
    this.recipeSelectedRl.emit(recipe);
  }
}
