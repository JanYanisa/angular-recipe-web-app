import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  constructor(private slService:shoppingListService) {}

  ngOnInit(): void {}
  onAdd() {
    // console.log(nameInput);
    const ingName = this.nameInput.nativeElement.value
    const ingAmount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredients(
        ingName,
        ingAmount
      )
    this.slService.addIngredient(newIngredient)
  }
}
