import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-info-consulta',
  templateUrl: './info-consulta.component.html',
  styleUrls: ['./info-consulta.component.css']
})
export class InfoConsultaComponent implements OnInit {

  title: string;
  description: string;
  numero: string;
  image: string;

  constructor(
    private dialogRef: MatDialogRef<InfoConsultaComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.title = data.title;
    this.description = data.description;
    this.image = './assets/img/consultas.png';
    this.numero = data.numero;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {

  }

  // tslint:disable-next-line:typedef
  close() {
    this.dialogRef.close();
  }

}
