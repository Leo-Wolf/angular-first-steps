import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPost',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for ( const post of value ) {
      if ( post.name.toLowerCase().includes(arg.toLowerCase() ) ) {
          resultPost.push( post );
      }

    }
    return resultPost;
  }
}
