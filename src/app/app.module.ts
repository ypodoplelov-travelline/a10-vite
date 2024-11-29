import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactWrapperComponent } from './wrapper/react-wrapper';
import { HelloAngularComponent } from './wrapper/hello-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ReactWrapperComponent, HelloAngularComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
