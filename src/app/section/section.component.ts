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
      date: '12/12/2022',
      duration: '120',
      description: 'new tech'
    },{
      id: 2,
      name: 'david',
      date: '11/21/2019',
      duration: '45',
      description: 'new tech'
    },{
      id: 3,
      name: 'jorge',
      date: '04/09/2012',
      duration: '60',
      description: 'new tech'

    },{
       id: 4,
       name: 'jorge',
       date: '04/09/2012',
       duration: '50',
       description: 'new tech'

     },{
        id: 5,
        name: 'jorge',
        date: '04/09/2012',
        duration: '50',
        description: ''

      }];
  ngOnInit() {
    for (var key in this.posts) {
      var dateCreation = new Date(this.posts[key]['date'] );
      this.posts[key]['duration'] = this.timeConvert(this.posts[key]['duration']);

      var currentDate = new Date();
      var days14less = new Date();
      var x = "x = {'background-color':'pink'}";
      days14less.setDate(days14less.getDate() - 14);
     /* console.log(dateCreation +" date creation");
      console.log( currentDate +" Current Date ");
      console.log( days14less +" Current minus 14");
      console.log(dateCreation < currentDate && dateCreation >= days14less );

      console.log(dateCreation > currentDate );*/

      if(dateCreation < currentDate && dateCreation >= days14less){
        this.posts[key]['color'] = "#97ffb6";
      }else if(dateCreation > currentDate){
        this.posts[key]['color'] = "#97f9ff";
      }else{

        this.posts[key]['color'] ="#fdcbfc";
      }
      /*[style.background-image]="'url(' + photo + ')'"*/
      //ColorBorder
  }
  }
   timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if( rhours === 0){
      return rminutes +" mins";
    }
    return  rhours + "h : " + rminutes +" mins";
    }

}
