import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {
  }
  admin = false;
  id: string;
  Items = ['Dashboard', 'Inventos', 'Investigadores', 'Paises', 'Encuestas', 'Areas', 'Consultas'];
  ItemsC = ['Invento', 'Investigador', 'Inventor', 'Pais', 'Region', 'Frontera', 'Encuesta', 'Area_Investigacion'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('Id');
    // tslint:disable-next-line:triple-equals
    if (this.id == 'A') { this.admin = true; }
  }


}
