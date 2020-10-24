import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ClimaService} from '../../services/clima.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  Clima: any = {};
  Astronomia: any = {};
  Consulta1: any = [];

  constructor(public climaApi: ClimaService){}

  ngOnInit(): void {
    this.ClimaActual();
    this.AstronomiaActual();
  }

  // tslint:disable-next-line:typedef
  ClimaActual()
  {
    return this.climaApi.getClima().subscribe((data: {}) => {
      this.Clima = data;
    });
  }
  // tslint:disable-next-line:typedef
  AstronomiaActual()
  {
    return this.climaApi.getAstronomia().subscribe((data: {}) => {
      this.Astronomia = data;
    });
  }
}
