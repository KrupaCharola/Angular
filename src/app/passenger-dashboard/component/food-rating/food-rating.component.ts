import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IFoody } from "../../models/passenger-dashboard.interfaces"
@Component({
    selector: "food-rating",
    templateUrl: "./food-rating.html"
})

export class FoodRatingComponent {
    @Input()
    foodObject: IFoody
    @Output()
    remove: EventEmitter<any> = new EventEmitter()
    @Output()
    edit: EventEmitter<any> = new EventEmitter()
    isChanged: boolean
    onChange(value: number) {
        this.foodObject.rating = value;
    }
    toggleEdit() {
        if (this.isChanged) {
            this.edit.emit(this.foodObject);
        }
        this.isChanged = !this.isChanged;

    }

    onRemove() {
        this.remove.emit(this.foodObject)
    }
}  