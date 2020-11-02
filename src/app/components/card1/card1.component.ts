import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  @Input() title: string;

  currentDate: any;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

}
