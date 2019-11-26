import { Component, EventEmitter, Input, OnInit, Output, Directive } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { ColorBorderDirective } from '../directive/color-border.directive';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course.service'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  posts:any[] = [];
  @Input() FilterPipe : FilterPipe;

  constructor(private _service:CourseService) {
    this.posts = _service.getList();
   }

  color = 'white';
  d1 = new Date();
  name = 'filterPipe';
  public filterName = '';
  a:number = 0;

  ngOnInit() {
    for (var key in this.posts) {
      var dateCreation = new Date(this.posts[key]['date'] );
      this.posts[key]['duration'] = this.timeConvert(this.posts[key]['duration']);

      var currentDate = new Date();
      var days14less = new Date();
      var x = "x = {'background-color':'pink'}";
      days14less.setDate(days14less.getDate() - 14);

      if(dateCreation < currentDate && dateCreation >= days14less){
        this.posts[key]['color'] = "#97ffb6";
      }else if(dateCreation > currentDate){
        this.posts[key]['color'] = "#97f9ff";
      }else{

        this.posts[key]['color'] ="#fdcbfc";
      }
  }
  }
  deleteCourseById(id:number){
    this._service.deleteCourseById(id);
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
