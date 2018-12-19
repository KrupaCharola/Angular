import { Component, Input } from "@angular/core";
import { IFoody } from "../../models/passenger-dashboard.interfaces"
@Component({
  selector: "food-name",
  templateUrl: "./food-name.html"
})

export class FoodNameComponent {
  @Input()
  items: Array<IFoody>

  isColdItems():string[] {
    if (!this.items) {
      return;
    }
    else {
      return this.items.filter((foody: IFoody) =>!foody.isCold).map(food=>food.name);
    }
  }
} 