import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
posts:any[] = [{
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
  constructor() { console.log("funcionando")}

  obtenerCourso(){
    return this.posts;
  }
}
