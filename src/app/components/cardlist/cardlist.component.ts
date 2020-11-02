import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  image: string;

  constructor() { this.image = './assets/img/consultas.png'; }

  ngOnInit(): void {
  }

}
