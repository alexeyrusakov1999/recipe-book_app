import { Component } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Potatoes", 8),
  ];

  onIngredientAdded(ingredient: Ingredient) {
    event.preventDefault();
    this.ingredients.push(ingredient);
  }
}
