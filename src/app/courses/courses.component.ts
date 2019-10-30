import { Component, OnInit } from '@angular/core';
import { ICourses } from '../icourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: ICourses [] = [];

  constructor() { }

  ngOnInit() {
  }

}
