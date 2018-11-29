import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { bloomHashBitOrFactory } from '@angular/core/src/render3/di';

interface Foody {
  name: string;
  taste: string;
  rating: number;
  isCold: boolean;
  date?: number;
  price: number;
  choices?:Array<choicesForFood>
}

interface choicesForFood{
  name:string;
  price:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss'],
})
export class AppComponent {

  name: string = ""
  title: string = "Krupa's PC"
  foodChoice = new Array<Foody>({
    name: "Pizza",
    taste: "spicy",
    rating: 10,
    isCold: false,
    date: 9898767898767, 
    price: 500,
    choices:[{name:"margeritta",price:500}]
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

  nameChangedEvent(value: string) {
    this.name = value
  }

}