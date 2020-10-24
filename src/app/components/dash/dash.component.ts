import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ApiService} from '../../services/api.service';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  Inventos: any = [];
  Investigadores: any = [];
  Paises: any = [];
  Inventores: any = [];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/600`);
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private restApi: ApiService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadInventos();
    this.loadInvestigadores();
    this.loadPaises();
    this.loadInventores();
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
  loadInventores() {
    return this.restApi.getInventores().subscribe((data: {}) => {
      this.Inventores = data;
    });
  }
}
