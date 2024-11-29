import { Component, VERSION } from '@angular/core';

import template from './app.component.html?raw'

import stylesData from './app.component.css?raw'

@Component({
  selector: 'my-app',
  template: template,
  styles: [stylesData]
  // templateUrl: './app.component.html',
  // styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.full;
}
