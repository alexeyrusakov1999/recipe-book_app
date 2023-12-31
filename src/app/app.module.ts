import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./pages/recipe-book/recipes/recipes.component";
import { RecipesListComponent } from "./pages/recipe-book/recipes/recipes-list/recipes-list.component";
import { RecipeDetailComponent } from "./pages/recipe-book/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./pages/recipe-book/recipes/recipes-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./pages/shopping-list/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./pages/shopping-list/shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
