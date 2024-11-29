import { Component, Input } from '@angular/core';

import styles from './hello.component.css?raw'

@Component({
  selector: 'hello',
  template: `<div><h1>Hello {{name}}!</h1><span class="dd">test</span></div>`,
  styles: [`h1 { font-family: Lato; }`, styles]
})
export class HelloComponent  {
  @Input() name: string;
}
