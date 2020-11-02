import {Component, Input, OnInit} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-cardv',
  templateUrl: './cardv.component.html',
  styleUrls: ['./cardv.component.css']
})
export class CardvComponent implements OnInit {
  @Input() title: string;
  image: string;

  constructor() { this.image = './assets/img/consultas.png'; }

  ngOnInit(): void {
  }

}
