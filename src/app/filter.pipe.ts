import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  
  name: 'filterPost',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    //console.log(value);
   // console.log(arg.toLowerCase());
   // if (arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for ( const post of value ) {
      //.prdName.toLowerCase().includes(term.toLowerCase());
      //console.log( post.name.toLowerCase().includes(arg.toLowerCase()));
      if ( post.name.toLowerCase().includes(arg.toLowerCase() ) ){ 
          resultPost.push( post );
      }
    }
    //console.log(resultPost);
    return resultPost;
  }
}
