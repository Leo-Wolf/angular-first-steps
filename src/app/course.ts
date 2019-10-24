import { ICourses } from './icourses';

export class Course implements ICourses{

public id:number;
public Title:string;
public Creation:string;
public date:string;
public Description:string;

constructor(title:string, creaction:string, date:string, description:string){
    this.Title       = title;
    this.Creation    = creaction;
    this.date        = date;
    this.Description = description;

}

}
