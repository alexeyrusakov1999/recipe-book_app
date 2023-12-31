import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
    const newIngredinet = new Ingredient(nameIng, amountIng);
    this.ingredientAdded.emit(newIngredinet);
  }
}
