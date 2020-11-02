import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  @Input() title: string;

  currentDate: any;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

}
