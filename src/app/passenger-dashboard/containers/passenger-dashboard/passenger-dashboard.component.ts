import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { IFoody } from '../../models/passenger-dashboard.interfaces'
@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: "../passenger-dashboard/passenger-dashboard.html"

})

export class PassengerDashboardComponent implements OnInit {
    foodChoice: Array<IFoody>;
    ngOnInit() {
        console.log("inside OnInit");
        this.foodChoice = new Array<IFoody>({
            name: "Pizza",
            taste: "spicy",
            rating: 10,
            isCold: false,
            date: 9898767898767,
            price: 500,
            choices: [{ name: "margeritta", price: 500 }]
        },
            {
                name: "KajuKatri",
                taste: "sweet",
                rating: 7,
                isCold: false,
                date: null,
                price: 5000
            }, {
                name: "Balaji Waffers",
                taste: "salty",
                rating: 7,
                isCold: true,
                date: null,
                price: 540
            }
        );

    }
    removeHandler(event){
        console.log(event)
    }
    editHandler(event){
        console.log(event)
    }

}