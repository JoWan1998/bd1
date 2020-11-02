import { Component, OnInit } from '@angular/core';
import {ClimaService} from '../../services/clima.service';

@Component({
  selector: 'app-weather-v1',
  templateUrl: './weather-v1.component.html',
  styleUrls: ['./weather-v1.component.css']
})
export class WeatherV1Component implements OnInit {

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
