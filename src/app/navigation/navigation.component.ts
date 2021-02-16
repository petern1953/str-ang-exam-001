import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public activeItem: Array<string> = ["active",""];

  constructor() { }

  // flipActive(i: number): void {
  //   this.activeItem[i] = this.activeItem[i] ? "" : "active";
  // }
  flipActive(i: number): void {
    if (this.activeItem[i]) return
    [this.activeItem[0], this.activeItem[1]] = [this.activeItem[1], this.activeItem[0]]
  }

  ngOnInit(): void {
  }

}
