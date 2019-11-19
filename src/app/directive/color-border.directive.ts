import { Directive, ElementRef, HostListener , Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective {

  @Input('appColorBorder') ColorBorderC:string;

  constructor( private el: ElementRef,private renderer: Renderer2) {   }

  @HostListener('mouseenter') onMouseEnter(){
    this.ColorBorder(  this.ColorBorderC );
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.ColorBorder(  'green');
  }
  private ColorBorder (color:string):void{
   //console.log(color);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.el.nativeElement.style.backgroundColor = color;
  }

}
