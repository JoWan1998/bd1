import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-top5-investigadores',
  templateUrl: './top5-investigadores.component.html',
  styleUrls: ['./top5-investigadores.component.css']
})
export class Top5InvestigadoresComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public systemChartData: ChartDataSets[] = [
    { data: [], label: 'Investigador/Invento' },
  ];

  Investigadores: any = [];

  public chartColors: any[] = [
    {
      backgroundColor: ['#FF7360', '#6FC8CE', '#000000', '#FFFCC4', '#B9E8E0']
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
    return this.restApi.getconsulta1().subscribe((data: {}) => {
      this.Investigadores = data;
      if ( data instanceof Array)
      {
        for (let a = 0; a < 5; a++)
        {
          this.systemChartData[0].data.push(data[a].INVENTOS_ASIGNADOS);
          this.systemChartLabel.push(data[a].PROFESIONAL);
        }
      }
    });
  }

}
