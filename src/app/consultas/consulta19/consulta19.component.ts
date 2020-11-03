import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Consulta19DataSource, Consulta19Item } from './consulta19-datasource';
import {ApiService} from '../../services/api.service';

interface Consulta3 {
  id?: number;
  PAIS: string;
  PAIS_FRONTERA: string;
  FRONTERA: string;
}

@Component({
  selector: 'app-consulta19',
  templateUrl: './consulta19.component.html',
  styleUrls: ['./consulta19.component.css']
})
export class Consulta19Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['No', 'Pais', 'Pais Frontera', 'Frontera'];
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
    return this.restApi.getconsulta19().subscribe((data: {}) => {
      if (data instanceof Array)
      {
        let numero = 1;
        this.COUNTRIES = [];
        data.forEach(dato => {
          this.COUNTRIES.push({id: numero, PAIS: dato.PAIS, PAIS_FRONTERA: dato.PAIS_FRONTERA, FRONTERA: dato.FRONTERA});
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
