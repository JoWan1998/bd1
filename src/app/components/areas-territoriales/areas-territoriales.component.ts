import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-areas-territoriales',
  templateUrl: './areas-territoriales.component.html',
  styleUrls: ['./areas-territoriales.component.css']
})
export class AreasTerritorialesComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public systemChartData: ChartDataSets[] = [
    { data: [], label: 'Area Km2' },
  ];

  Areas: any = [];

  public chartColors: any[] = [
    {
      backgroundColor: ['#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0', '#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0', '#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0'
                      , '#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0', '#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0']
    }];

  public systemChartLabel: Label[] = [];
  constructor(public restApi: ApiService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.LoadConsulta8();
  }

  // tslint:disable-next-line:typedef
  LoadConsulta8()
  {
    return this.restApi.getconsulta8_1().subscribe((data: {}) => {
      this.Areas = data;
      if ( data instanceof Array)
      {
        data.forEach(li => {
          this.systemChartData[0].data.push(li.AREA_kM2);
          this.systemChartLabel.push(li.INICIAL_PAIS);
        });
      }
    });
  }

}
