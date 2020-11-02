import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Consulta13DataSource, Consulta13Item } from './consulta13-datasource';
import {ApiService} from '../../services/api.service';

interface Consulta3 {
  id?: number;
  INVESTIGADOR: string;
  SALARIO: string;
  COMISION: string;
  SALARIO_TOTAL: string;
}

@Component({
  selector: 'app-consulta13',
  templateUrl: './consulta13.component.html',
  styleUrls: ['./consulta13.component.css']
})
export class Consulta13Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['No', 'Investigador', 'Salario', 'Comision', 'Salario Total'];
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
    return this.restApi.getconsulta13().subscribe((data: {}) => {
      if (data instanceof Array)
      {
        let numero = 1;
        this.COUNTRIES = [];
        data.forEach(dato => {
          // tslint:disable-next-line:max-line-length
          this.COUNTRIES.push({id: numero, INVESTIGADOR: dato.INVESTIGADOR, SALARIO: `Q. ${dato.SALARIO}`, COMISION: `Q. ${dato.COMISION}`, SALARIO_TOTAL: `Q. ${dato.SALARIO_TOTAL}`});
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
