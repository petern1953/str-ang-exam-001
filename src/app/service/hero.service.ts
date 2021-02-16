import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    { id: 1,
    name: 'Peter Writing Petrelli',
    superPower: 'pulling',
    address: 'New York Jump 333' },
  { id: 11,
    name: 'Hiro Skiing Nakamura',
    superPower: 'writing',
    address: 'Boston 3'},
  {    id: 111,
    name: 'Claire Bennet',
    superPower: 'wrapping',
    address: 'San Ski Francisco 222'  },
  {    id: 1111,
    name: 'Noah Skiing Bennet',
    superPower: 'jumping',
    address: 'Washington 111'  },
  {    id: 11111,
    name: 'Jessica Jumping Sanders',
    superPower: 'skiing',
      address: 'Michigan Run 11'},

      { id: 2,
    name: 'Peter Writing Retrelli',
    superPower: 'searching',
    address: 'Seattle Jump 2' },
  { id: 22,
    name: 'Hiro Skiing Makamura',
    superPower: 'writing',
    address: 'Brooklin 3'},
  {    id: 222,
    name: 'Claire Dennet',
    superPower: 'swallowing',
    address: 'Karakószörcsög 111'  },
  {    id: 2222,
    name: 'Norah Jumping Dennet',
    superPower: 'sitting',
    address: 'Kecskemét 2'  },
  {    id: 22222,
    name: 'Jessica Writing Saunders',
    superPower: 'skiing',
      address: 'Moszkva 3'
    },

      { id: 3,
    name: 'Peter Jumping Petrocelli',
    superPower: 'pushing',
    address: 'Szentpétervár 222' },
  { id: 33,
    name: 'Hiro Skiing Nakimura',
    superPower: 'writing',
    address: 'Kairó 11'},
  {    id: 333,
    name: 'Clairo Jumping Benneto',
    superPower: 'running',
    address: 'Caracas Ski 333'  },
  {    id: 3333,
    name: 'Zoah Writing Bennet',
    superPower: 'jumping',
    address: 'Los Angeles Smash 2'  },
  {    id: 33333,
    name: 'Jessyca Skiing Sandors',
    superPower: 'smashing',
    address: 'Borsodnádasd 1'  },








  ];

  list$: BehaviorSubject<Hero[]>= new BehaviorSubject<Hero[]>([])

  constructor() { }

    getAll(): void {
    this.list$.next(this.list);
  }
}
