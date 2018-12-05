import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import {FormsModule} from '@angular/forms'
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //custom module
    PassengerDashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
