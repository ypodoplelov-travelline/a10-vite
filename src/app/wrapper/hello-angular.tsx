import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `<div><h1>Hello {{name}}!</h1><span class="dd">test</span></div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloAngularComponent  {
  @Input() name: string;
}
