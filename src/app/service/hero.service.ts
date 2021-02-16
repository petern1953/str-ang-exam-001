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
    superPower: 'pulling',
    address: 'New York' },
  { id: 11,
    name: 'Hiro Nakamura',
    superPower: 'writing',
    address: 'Boston'},
  {    id: 111,
    name: 'Claire Bennet',
    superPower: 'wrapping',
    address: 'San Francisco'  },
  {    id: 1111,
    name: 'Noah Bennet',
    superPower: 'jumping',
    address: 'Washington'  },
  {    id: 11111,
    name: 'Jessica Sanders',
    superPower: 'skiing',
      address: 'Michigan'},

      { id: 2,
    name: 'Peter Retrelli',
    superPower: 'searching',
    address: 'Seattle' },
  { id: 22,
    name: 'Hiro Makamura',
    superPower: 'writing',
    address: 'Brooklin'},
  {    id: 222,
    name: 'Claire Dennet',
    superPower: 'swallowing',
    address: 'Karakószörcsög'  },
  {    id: 2222,
    name: 'Norah Dennet',
    superPower: 'sitting',
    address: 'Kecskemét'  },
  {    id: 22222,
    name: 'Jessica Saunders',
    superPower: 'skiing',
      address: 'Moszkva'
    },

      { id: 3,
    name: 'Peter Petrocelli',
    superPower: 'pushing',
    address: 'Szentpétervár' },
  { id: 33,
    name: 'Hiro Nakimura',
    superPower: 'writing',
    address: 'Kairó'},
  {    id: 333,
    name: 'Clairo Benneto',
    superPower: 'running',
    address: 'Caracas'  },
  {    id: 3333,
    name: 'Zoah Bennet',
    superPower: 'jumping',
    address: 'Los Angeles'  },
  {    id: 33333,
    name: 'Jessyca Sandors',
    superPower: 'smashing',
    address: 'Borsodnádasd'  },








  ];

  list$: BehaviorSubject<Hero[]>= new BehaviorSubject<Hero[]>([])

  constructor() { }

    getAll(): void {
    this.list$.next(this.list);
  }
}
