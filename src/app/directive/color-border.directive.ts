import { Directive, ElementRef, HostListener , Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective  implements OnInit {

  @Input() ColorBorderC: string;

  constructor( private el: ElementRef ) {
  }

  @HostListener('click') onChange() {
    const x = this.el.nativeElement.style.borderLeft;
    if (x === '6px solid rgb(201, 176, 55)') {
      this.el.nativeElement.style.borderLeft = '';
    } else {
      this.el.nativeElement.style.borderLeft = '6px solid #C9B037' ;
    }
  }

  public ColorBorder(color: string): void {
        this.el.nativeElement.style.borderLeft = '6px solid ' + color;
  }
  ngOnInit() {}
}
