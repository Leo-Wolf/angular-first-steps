import { Component, EventEmitter, Input, OnInit, Output, Directive } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { ColorBorderDirective } from '../directive/color-border.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() FilterPipe: FilterPipe;
  constructor() { }
  color = 'white';
  d1 = new Date();

  name = 'filterPipe';
    public filterName = '';
    posts =  [{
      id: 1,
      name: 'leonardo',
      date: '12/12/2022',
      duration: '120',
      description: 'new tech',
      color: ''
    }, {
      id: 2,
      name: 'david',
      date: '11/21/2019',
      duration: '45',
      description: 'new tech',
      color: ''
    }, {
      id: 3,
      name: 'jorge',
      date: '04/09/2012',
      duration: '60',
      description: 'new tech',
      color: ''

    }, {
       id: 4,
       name: 'jorge',
       date: '04/09/2012',
       duration: '50',
       description: 'new tech',
       color: ''

     }, {
        id: 5,
        name: 'jorge',
        date: '04/09/2012',
        duration: '50',
        description: '',
        color: ''

      }];
  ngOnInit() {


    this.posts.forEach(element => {
      const dateCreation = new Date(element.date);
      const currentDate = new Date();
      const days14less = new Date();
      element.duration = this.timeConvert(element.duration);
      const x = '{background-color:pink}';
      days14less.setDate(days14less.getDate() - 14);

      if (dateCreation < currentDate && dateCreation >= days14less) {
        element.color = '#97ffb6';
      } else if (dateCreation > currentDate) {
        element.color = '#97f9ff';
      } else {
        element.color = '#fdcbfc';
      }
    });
  }
  timeConvert(n) {
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if ( rhours === 0) {
    return rminutes + ' mins';
  }
  return  rhours + 'h : ' + rminutes + ' mins';
  }

}
