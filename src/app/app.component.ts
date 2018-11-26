import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { bloomHashBitOrFactory } from '@angular/core/src/render3/di';
import { truncate } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  name: string = ""
  title:string="Krupa's PC"
  guest:string="Hellow Abhi!" // why whitespace does not effect in here?
  nameChangedEvent(value:string) {
    this.name=value
  }
}
