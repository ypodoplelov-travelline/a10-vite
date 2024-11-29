import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import ReactDOM from 'react-dom';
import {MyReactComponent} from './hello-react';

@Component({
  selector: 'app-react-wrapper',
  template: `<div #reactContainer></div>`,
  styles: [],
})
export class ReactWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactContainer', { static: false }) containerRef!: ElementRef;

  ngAfterViewInit() {
    this.renderReactComponent();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private renderReactComponent() {
    ReactDOM.render(<MyReactComponent />, this.containerRef.nativeElement);
  }
}
