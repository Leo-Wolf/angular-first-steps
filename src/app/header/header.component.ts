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
  login = false;
  @Output() public Child = new EventEmitter();

  ngOnInit() {}

  // tslint:disable-next-line: variable-name
  constructor(private _cdr: ChangeDetectorRef) {
   }
   changeStatus(): void {
    setTimeout(() => {
      this.Child.emit(this.status);
      this._cdr.detectChanges();
      console.log( 'logged' );
    }, 1000);
 }

}
