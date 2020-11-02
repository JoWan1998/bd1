import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Consulta3DataSource, Consulta3Item } from './consulta3-datasource';
import {ApiService} from '../../services/api.service';

interface Consulta3 {
  id?: number;
  PAIS: string;
  TERRITORIO: string;
}

@Component({
  selector: 'app-consulta3',
  templateUrl: './consulta3.component.html',
  styleUrls: ['./consulta3.component.css']
})
export class Consulta3Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['No', 'Pais', 'Territorio'];
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
    return this.restApi.getconsulta3().subscribe((data: {}) => {
      if (data instanceof Array)
      {
        let numero = 1;
        this.COUNTRIES = [];
        data.forEach(dato => {
          this.COUNTRIES.push({id: numero, PAIS: dato.PAIS, TERRITORIO: `${dato.TERRITORIO_kM2}  KM2`});
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
