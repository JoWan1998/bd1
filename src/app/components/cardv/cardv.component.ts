import {Component, Input, OnInit} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoConsultaComponent} from '../info-consulta/info-consulta.component';

@Component({
  selector: 'app-cardv',
  templateUrl: './cardv.component.html',
  styleUrls: ['./cardv.component.css']
})
export class CardvComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() numero: string;
  image: string;

  constructor(private dialog: MatDialog) { this.image = './assets/img/consultas.png'; }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: this.title,
      description: this.description,
      numero: this.numero
    };

    this.dialog.open(InfoConsultaComponent, dialogConfig);
  }

}
