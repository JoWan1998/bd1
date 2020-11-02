import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ApiService} from '../../services/api.service';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

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
          blog: { cols: 1, rows: 3 },
          bigblog: {cols: 1, rows: 3}
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
        blog: { cols: 2, rows: 3 },
        bigblog: {cols: 4, rows: 3}
      };
    })
  );
  href: string;
  val: any[];
  data: any[];
  url: string;

  // tslint:disable-next-line:max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private restApi: ApiService, config: NgbCarouselConfig, private route: ActivatedRoute, private router: Router) {
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
    this.data = [];
    this.url = '';
    this.href = this.router.url;
    this.val = this.href.split('/');
    // tslint:disable-next-line:prefer-for-of
    this.data.push({valor: this.val[1], url: `/${this.val[1]}`, active: false});
    this.url += `/${this.val[1]}/`;
    for (let m = 2; m < (this.val.length - 1); m++)
    {
      this.data.push({valor: ' ' + this.val[m], url: `${this.url}${this.val[m]}`, active: false});
      this.url += `${this.val[m]}/`;
    }
    this.data.push({valor: ' ' + this.val[this.val.length - 1], url: `${this.url}${this.val[this.val.length - 1]}`, active: true});
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
