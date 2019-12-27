import { Component, EventEmitter, Input, OnInit,
   OnChanges, Output, Directive, ɵConsole, ChangeDetectorRef, SimpleChanges  } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { ColorBorderDirective } from '../directive/color-border.directive';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {
  public posts: any[] = [];
  color = 'white';
  d1 = new Date();
  name = 'filterPipe';
  public filterName = '';
  a = 0;
  cursos: any[];

  @Input() FilterPipe: FilterPipe;

  // tslint:disable-next-line: variable-name
  constructor(private _service: CourseService, private cd: ChangeDetectorRef ) {
    this.posts = _service.getList();
   }
   deleteCourseById(id: number) {
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
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
    }
   ngOnChanges(changes: SimpleChanges) {

  }
   refresh() {
   }
  ngOnInit() {
    this.posts.forEach(element => {
      const dateCreation = new Date(element.date );
      element.duration  = this.timeConvert(element.duration);
      const currentDate = new Date();
      const days14less = new Date();
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
