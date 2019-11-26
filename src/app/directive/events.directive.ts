import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEvents]'
})
export class EventsDirective {

  constructor( private el: ElementRef) { }

  @HostListener('click') onClick(){
    var x = this.el.nativeElement.style.borderLeft;
    console.log(x);
    if(x === "6px solid rgb(201, 176, 55)"){
      this.el.nativeElement.style.borderLeft = "";
    }else{
      
      this.el.nativeElement.style.borderLeft = "6px solid #C9B037" ;
    }

}
