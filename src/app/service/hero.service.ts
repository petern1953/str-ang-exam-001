import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    { id: 1,
    name: 'Peter Petrelli',
    superPower: 'reading',
    address: 'New York' },
  { id: 11,
    name: 'Hiro Nakamura',
    superPower: 'writing',
    address: 'New York'},
  {    id: 111,
    name: 'Claire Bennet',
    superPower: 'sleeping',
    address: 'New York'  },
  {    id: 1111,
    name: 'Noah Bennet',
    superPower: 'jumping',
    address: 'New York'  },
  {    id: 11111,
    name: 'Jessica Sanders',
    superPower: 'skiing',
    address: 'New York'  },  ];

  list$: BehaviorSubject<Hero[]>= new BehaviorSubject<Hero[]>([])

  constructor() { }

    getAll(): void {
    this.list$.next(this.list);
  }
}
