import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-data-system',
  templateUrl: './data-system.component.html',
  styleUrls: ['./data-system.component.css']
})
export class DataSystemComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public systemChartData: ChartDataSets[] = [
    { data: [], label: 'Total Data in System' },
  ];
  datos0: any = [];
  datos1: any = [];
  datos2: any = [];
  datos3: any = [];

  public chartColors: any[] = [
    {
      backgroundColor: ['#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0']
    }];

  public systemChartLabel: Label[] = [];
  constructor(public restApi: ApiService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadInventores();
    this.loadInventos();
    this.loadInvestigadores();
    this.loadPaises();

  }

  // tslint:disable-next-line:typedef
  loadInventos() {
    return this.restApi.getInventos().subscribe((data: {}) => {
      this.datos0 = data;
      if ( data instanceof Array)
      {
        this.systemChartData[0].data.push(data.length);
        this.systemChartLabel.push('INVENTOS');
      }
    });
  }

  // tslint:disable-next-line:typedef
  loadInvestigadores()
  {
    return this.restApi.getInvestigadores().subscribe((data: {}) => {
      this.datos1 = data;
      if ( data instanceof Array)
      {
        this.systemChartData[0].data.push(data.length);
        this.systemChartLabel.push('INVESTIGADORES');
      }
    });
  }

  // tslint:disable-next-line:typedef
  loadPaises()
  {
    return this.restApi.getPaises().subscribe((data: {}) => {
      this.datos2 = data;
      if ( data instanceof Array)
      {
        this.systemChartData[0].data.push(data.length);
        this.systemChartLabel.push('PAISES');
      }
    });
  }

  // tslint:disable-next-line:typedef
  loadInventores() {
    return this.restApi.getInventores().subscribe((data: {}) => {
      this.datos3 = data;
      if ( data instanceof Array)
      {
        this.systemChartData[0].data.push(data.length);
        this.systemChartLabel.push('INVENTORES');
      }
    });
  }
}
