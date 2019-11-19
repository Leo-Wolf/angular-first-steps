import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'filterPost'})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   // if (arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for ( const post of value ) {
      //.prdName.toLowerCase().includes(term.toLowerCase());
      if ( post.toLowerCase().includes(arg.toLowerCase() ) > -1 ){ 
        resultPost.push( post );
      }
    }
    return resultPost;
  }
}
