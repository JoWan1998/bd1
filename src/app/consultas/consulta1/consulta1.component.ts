import { Component } from '@angular/core';
import {ApiService} from '../../services/api.service';


interface Consulta1 {
  id?: number;
  PROFESIONAL: string;
  INVENTOS_ASIGNADOS: number;
}

@Component({
  selector: 'app-consulta1',
  templateUrl: './consulta1.component.html',
  styleUrls: ['./consulta1.component.css']
})
export class Consulta1Component{
  COUNTRIES: any = [];
  page = 1;
  pageSize = 4;
  tam = 0;
  countries: Consulta1[];

  constructor(public restApi: ApiService) {
    this.loadConsulta();
  }

  // tslint:disable-next-line:typedef
  loadConsulta() {
    return this.restApi.getconsulta1().subscribe((data: {}) => {
      if (data instanceof Array)
      {
        this.COUNTRIES = [];
        data.forEach(dato => {
          this.COUNTRIES.push({PROFESIONAL: dato.PROFESIONAL, INVENTOS_ASIGNADOS: dato.INVENTOS_ASIGNADOS});
        });
        this.refreshCountries();
        this.tam = this.COUNTRIES.length;
      }
    });
  }
  // tslint:disable-next-line:typedef
  refreshCountries() {
    this.countries = this.COUNTRIES.map((Consultar, i) => ({id: i + 1, ...Consultar}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
