import { Component, OnInit, ChangeDetectorRef,ChangeDetectionStrategy, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], 
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {
  
  status = 'true';
  login:boolean = false;
  @Output() public Child = new EventEmitter();

  ngOnInit(){}

  constructor(private _cdr: ChangeDetectorRef) {
   }
   changeStatus(): void {
    setTimeout(() => {
      this.Child.emit(this.status);
      //this.status = true;
      this._cdr.detectChanges();
      console.log("holi");
    }, 1000);
 }

}
