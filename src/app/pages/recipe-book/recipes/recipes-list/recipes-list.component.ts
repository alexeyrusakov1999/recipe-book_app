import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Pasta",
      "make a pasta with love",
      "https://s1.eda.ru/StaticContent/Photos/121017153819/190315152129/p_O.jpg"
    ),
    new Recipe(
      "Pasta",
      "make a pasta with love",
      "https://s1.eda.ru/StaticContent/Photos/121017153819/190315152129/p_O.jpg"
    ),
  ];
}
