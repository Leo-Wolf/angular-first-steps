import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }
  name = 'filterPipe';
    filterPost = '';
    posts = [{
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
  }

}
