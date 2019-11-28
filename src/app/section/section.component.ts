import { Component, EventEmitter, Input, OnInit, OnChanges, Output, Directive, ɵConsole, ChangeDetectorRef, SimpleChanges  } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { ColorBorderDirective } from '../directive/color-border.directive';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course.service'
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {
  public posts:any[] = [];
  color = 'white';
  d1 = new Date();
  name = 'filterPipe';
  public filterName = '';
  a:number = 0;
  cursos:any[];

  @Input() FilterPipe : FilterPipe;
  //@Input() data:post[];

  constructor(private _service:CourseService,private cd: ChangeDetectorRef ) {
    this.posts = _service.getList();
   }
   deleteCourseById(id:number){    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.cursos =  this._service.deleteCourseById(this.posts , id); 
        this.posts = [];
        this.posts = this.cursos;  
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
     
    }
   ngOnChanges(changes:SimpleChanges){

  }
   refresh(){
    //this.cd.detectChanges();
   }
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
  /*trackByFn(index:number, movie:any): void {
    console.log(index +" index ");
    console.log( movie.id);
    //return movie.id;
  }*/

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
