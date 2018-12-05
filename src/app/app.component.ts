import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { bloomHashBitOrFactory } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss'],
})
export class AppComponent {

  name: string;
  title: string;
  constructor() {
    this.name = "";
    this.title = "KRUPA'S PC"

  }
}