import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Hero[] | null, phrase: string, key: string | number): any {
    if (!Array.isArray(value) || !phrase || !key)
      return value;

    let lcPhrase = ('' + phrase).toLowerCase();
    return value.filter(item => ('' + item[key]).toLowerCase().includes(lcPhrase));
  }

}
