import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public activeItem: string = "active";

  constructor() { }

  flipActive(): void {
    this.activeItem = this.activeItem ? "" : "active";
  }

  ngOnInit(): void {
  }

}
