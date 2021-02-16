import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: Hero[] | null, phrase: string, key: string | number): any {
  transform(value: Hero[] | null, phrase: string, key: string | number): any {
    if (!Array.isArray(value) || !phrase || !key)
      return value;

    if (key == "id")
      return value.filter(item => ('' + item.id) == (phrase));

    let lcPhrase = ('' + phrase).toLowerCase();
    return value.filter(item => ('' + item[key]).toLowerCase().includes(lcPhrase));
  }

}
