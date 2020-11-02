import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Consulta7DataSource, Consulta7Item } from './consulta7-datasource';
import {ApiService} from '../../services/api.service';

interface Consulta3 {
  id?: number;
  INVENTO: string;
}

@Component({
  selector: 'app-consulta7',
  templateUrl: './consulta7.component.html',
  styleUrls: ['./consulta7.component.css']
})
export class Consulta7Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['No', 'Invento'];
  dataSource: any;
  COUNTRIES: Consulta3[];
  // page = 1;
  // pageSize = 4;
  // tam = 0;
  // countries: Consulta1[];

  constructor(public restApi: ApiService) {
    this.loadConsulta();
    this.dataSource = new MatTableDataSource<Consulta3>(this.COUNTRIES);
  }

  // tslint:disable-next-line:typedef
  loadConsulta() {
    return this.restApi.getconsulta7().subscribe((data: {}) => {
      if (data instanceof Array)
      {
        let numero = 1;
        this.COUNTRIES = [];
        data.forEach(dato => {
          this.COUNTRIES.push({id: numero, INVENTO: dato.INVENTO});
          numero++;
        });
        // this.refreshCountries();
        // this.tam = this.COUNTRIES.length;
      }
    });
  }
  /*
  // tslint:disable-next-line:typedef
  refreshCountries() {
    this.countries = this.COUNTRIES.map((Consultar, i) => ({id: i + 1, ...Consultar}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  */

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
}
