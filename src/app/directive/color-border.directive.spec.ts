import { ColorBorderDirective } from './color-border.directive';
import {ElementRef , Renderer2 } from '@angular/core';
 el: ElementRef;
 renderer: Renderer2;

describe('ColorBorderDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorBorderDirective( this.el, this.renderer);
    expect(directive).toBeTruthy();
  });
});
