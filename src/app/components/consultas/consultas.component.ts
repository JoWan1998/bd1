import { Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ApiService} from '../../services/api.service';
import {Moment} from 'moment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

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
        blog: { cols: 3, rows: 3 },
        bigblog: {cols: 4, rows: 3}
      };
    })
  );
  href: string;
  val: any[];
  data: any[];
  url: string;

  // tslint:disable-next-line:max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private restApi: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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

}
