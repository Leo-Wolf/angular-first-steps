import { Directive, ElementRef, HostListener , Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective implements OnInit{

  @Input() ColorBorderC:string;

  constructor( private el: ElementRef,private renderer: Renderer2) {
    //this.ColorBorder(this.ColorBorderC);

    }

  @HostListener('click') onChange(){
    this.ColorBorder(  '#C9B037' );
  } /*
  @HostListener('mouseleave') onMouseLeave(){
    this.ColorBorder(  'green');
  }*/

  public ColorBorder (color:string):void{
   //console.log(color);
    //if(color != '#C9B037' ){
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
        this.el.nativeElement.style.backgroundColor = color;
    //}
    /*
    this.renderer.setStyle(this.el.nativeElement, 'background-color', "white");
    this.el.nativeElement.style.backgroundColor = "white";
    */
  }
   ngOnInit() {}
}
