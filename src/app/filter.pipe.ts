import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'filterPost'})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for ( const post of value ) {
      if ( post.name.toLowerCase().includes(arg.toLowerCase() ) > -1 ) {
        resultPost.push( post );
      }
    }
    return resultPost;
  }
}
