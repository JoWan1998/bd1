import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {ClimaService} from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bd1';
  Inventos: any = [];
  Investigadores: any = [];
  Paises: any = [];
  Regiones: any = [];
  Fronteras: any = [];
  Clima: any = {};
  Astronomia: any = {};
  Consulta1: any = [];


  constructor(
    public restApi: ApiService,
    public climaApi: ClimaService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    /*
    this.loadInventos();
    this.loadInvestigadores();
    this.loadPaises();
    this.loadRegiones();
    this.loadFronteras();
    */
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
  // tslint:disable-next-line:typedef
  Consultas1()
  {
    return this.restApi.getconsulta1().subscribe((data: {}) => {
      this.Consulta1 = data;
    });
  }

  // tslint:disable-next-line:typedef
  loadInventos() {
    return this.restApi.getInventos().subscribe((data: {}) => {
      this.Inventos = data;
    });
  }

  // tslint:disable-next-line:typedef
  loadInvestigadores()
  {
    return this.restApi.getInvestigadores().subscribe((data: {}) => {
      this.Investigadores = data;
    });
  }

  // tslint:disable-next-line:typedef
  loadPaises()
  {
    return this.restApi.getPaises().subscribe((data: {}) => {
      this.Paises = data;
    });
  }

  // tslint:disable-next-line:typedef
  loadRegiones()
  {
    return this.restApi.getRegiones().subscribe((data: {}) => {
      this.Regiones = data;
    });
  }

  // tslint:disable-next-line:typedef
  loadFronteras()
  {
    return this.restApi.getFronteras().subscribe((data: {}) => {
      this.Fronteras = data;
    });
  }

}
