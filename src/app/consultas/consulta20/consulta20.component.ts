import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Consulta20DataSource, Consulta20Item } from './consulta20-datasource';
import {ApiService} from '../../services/api.service';

interface Consulta3 {
  id?: number;
  INVESTIGADOR: string;
  COMISION: string;
  SALARIO: string;
}

@Component({
  selector: 'app-consulta20',
  templateUrl: './consulta20.component.html',
  styleUrls: ['./consulta20.component.css']
})
export class Consulta20Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['No', 'Investigador', 'Comision', 'Salario'];
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
    return this.restApi.getconsulta20().subscribe((data: {}) => {
      if (data instanceof Array)
      {
        let numero = 1;
        this.COUNTRIES = [];
        data.forEach(dato => {
          // tslint:disable-next-line:max-line-length
          this.COUNTRIES.push({id: numero, INVESTIGADOR: dato.INVESTIGADOR, COMISION: `Q. ${dato.COMISION}`, SALARIO: `Q. ${dato.SALARIO}`});
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
