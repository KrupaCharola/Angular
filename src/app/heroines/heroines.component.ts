import { Component } from '@angular/core';

@Component({
selector:'app-heroine',
template: `
<div>{{title}}<div>
`
})
  
export class HeroinesComponent {
    title: string;
    constructor() {
        this.title = "FRIENDS"
    }
}