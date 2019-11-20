import { Component, EventEmitter, Input, OnInit, Output, Directive } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { ColorBorderDirective } from '../directive/color-border.directive';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() FilterPipe : FilterPipe;
 // @Directive() 
  constructor() { }
  color = 'white';
  d1 = new Date();

  name = 'filterPipe';
    public filterName = '';
    posts =  [{
      id: 1,
      name: 'leonardo',
      date: '03/05/1992',
      duration: '120 min',
      description: 'new tech'
    },{  
      id: 2,
      name: 'david',
      date: '03/08/2002',
      duration: '45 min',
      description: 'new tech'
    },{  
      id: 3,
      name: 'jorge',
      date: '04/09/2012',
      duration: '50 min',
      description: 'new tech'

    }];
  ngOnInit() {
    for (var key in this.posts) {
      var dateCreation = new Date(this.posts[key]['date'] );
      var currentDate = new Date();
      var days14less = new Date(currentDate.getDate() - 14);
      if(dateCreation < currentDate && dateCreation >= days14less){
        this.posts[key]['color'] = 'green';
      }else if(dateCreation > currentDate){        
        this.posts[key]['color'] = 'blue';
      }else{
        
        this.posts[key]['color'] = 'pink';
      }


      //ColorBorder
  }
  }

}
