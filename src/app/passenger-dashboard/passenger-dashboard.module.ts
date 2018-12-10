import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//containers
import { PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'
//components
import {FoodNameComponent} from './component/food-name/food-name.component'
import {FoodRatingComponent} from './component/food-rating/food-rating.component'
@NgModule({
    declarations:[PassengerDashboardComponent,FoodNameComponent,FoodRatingComponent],
    imports:[CommonModule ],
    exports: [PassengerDashboardComponent]

})


export class PassengerDashboardModule {

} 