import { Directive, ElementRef, HostListener , Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective implements OnInit{

  @Input() ColorBorderC:string;

  constructor( private el: ElementRef,private renderer: Renderer2) {
    //this.ColorBorder(this.ColorBorderC);

    }
    /*
  @HostListener('change') onChange(){
    this.ColorBorder(  this.ColorBorderC );
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.ColorBorder(  'green');
  }*/

  public ColorBorder (color:string):void{
   //console.log(color);

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.el.nativeElement.style.backgroundColor = color;
  }
   ngOnInit() {}
}
