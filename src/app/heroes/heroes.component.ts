import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;
  phraseControl: FormControl = new FormControl('');
  phrase: string = '';
  order: number = 1;
  columnKey: string = '';
  searchText: string = "Search for column";

  constructor(
    private heroService: HeroService,
  ) { }

  // ngOnInit(): void {
  //   this.heroService.getAll();
  // }

  ngOnInit(): void {
    this.heroService.getAll();
    this.phraseControl.valueChanges.pipe(
      debounceTime(800)
    ).subscribe(
      newValue => this.phrase = newValue
    );
  }

  changeOrder(): void {
  console.log(this.order)
    this.order = -this.order;
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.changeOrder();
    this.searchText = "Search for " + `${this.columnKey}`
  }

  onChangePhrase(event: Event): void {
  this.phrase = (event.target as HTMLInputElement).value;
  }


}
