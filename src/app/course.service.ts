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
  //get list
  getList(){
    return this.posts;
  }
  //create course
  setCourse(newName:string, newDate:string, newDuration:number, newDescription:string){
    let newCourse:any[] =[{
      name:newName, 
      date:newDate, 
      duration:newDuration, 
      description:newDescription
    }]
    if(this.posts.push(newCourse) !== -1){
      //Alert succefull
    }else{
      //something wrong
    }
  }
  //get item by id
  getCourseById(id:number){
    return this.posts[id];
  }
  //update item
  setCourseById(id:number,updateName:string, updateDate:string, updateDuration:number, updateDescription:string){ 
    this.posts[id]['name'] = updateName;
    this.posts[id]['date'] = updateDate;
    this.posts[id]['duration'] = updateDuration;
    this.posts[id]['description'] = updateDescription;
    //return this.posts[id];
    //Succefully
  }
  //remove item
  deleteCourseById(id:number){
    this.posts.slice(id);
  }
}
