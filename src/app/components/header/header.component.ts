import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Output() selectedFeature = new EventEmitter<string>();

  onSelected(selectedPage: string) {
    this.selectedFeature.emit(selectedPage);
  }
}
