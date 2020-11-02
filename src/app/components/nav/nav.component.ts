import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router) {
    this.image = './assets/img/profile.png';
  }
  admin = false;
  id: string;
  Items = ['Dashboard', 'Inventos', 'Investigadores', 'Paises', 'Encuestas', 'Areas', 'Consultas'];
  ItemsC = ['Invento', 'Investigador', 'Inventor', 'Pais'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  href: string;
  val: any[];
  data: any[];
  url: string;
  image: string;
  ngOnInit(): void {
    this.data = [];
    this.url = '';
    this.id = this.route.snapshot.paramMap.get('Id');
    // tslint:disable-next-line:triple-equals
    if (this.id == 'A') { this.admin = true; }
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
