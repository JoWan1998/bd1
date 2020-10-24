import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LogInComponent } from './components/log-in/log-in.component';
import { AngularMaterialModule } from './angular-material.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './components/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './components/card/card.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ChartsModule } from 'ng2-charts';
import { DataSystemComponent } from './components/data-system/data-system.component';
import { Top5InvestigadoresComponent } from './components/top5-investigadores/top5-investigadores.component';
import { AreasTerritorialesComponent } from './components/areas-territoriales/areas-territoriales.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {Consulta1Component} from './consultas/consulta1/consulta1.component';
import { Consulta2Component } from './consultas/consulta2/consulta2.component';
import { Consulta3Component } from './consultas/consulta3/consulta3.component';
import { Consulta4Component } from './consultas/consulta4/consulta4.component';
import { Consulta5Component } from './consultas/consulta5/consulta5.component';
import { Consulta6Component } from './consultas/consulta6/consulta6.component';
import { Consulta7Component } from './consultas/consulta7/consulta7.component';
import { Consulta8Component } from './consultas/consulta8/consulta8.component';
import { Consulta9Component } from './consultas/consulta9/consulta9.component';
import { Consulta10Component } from './consultas/consulta10/consulta10.component';
import { Consulta11Component } from './consultas/consulta11/consulta11.component';
import { Consulta12Component } from './consultas/consulta12/consulta12.component';
import { Consulta13Component } from './consultas/consulta13/consulta13.component';
import { Consulta14Component } from './consultas/consulta14/consulta14.component';
import { Consulta15Component } from './consultas/consulta15/consulta15.component';
import { Consulta16Component } from './consultas/consulta16/consulta16.component';
import { Consulta17Component } from './consultas/consulta17/consulta17.component';
import { Consulta18Component } from './consultas/consulta18/consulta18.component';
import { Consulta19Component } from './consultas/consulta19/consulta19.component';
import { Consulta20Component } from './consultas/consulta20/consulta20.component';
import { InventoComponent } from './crud/invento/invento.component';
import { InvestigadorComponent } from './crud/investigador/investigador.component';
import { PaisComponent } from './crud/pais/pais.component';
import { RegionComponent } from './crud/region/region.component';
import { InventorComponent } from './crud/inventor/inventor.component';
import { AreaComponent } from './crud/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NotfoundComponent,
    MainComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    WeatherComponent,
    DataSystemComponent,
    Top5InvestigadoresComponent,
    AreasTerritorialesComponent,
    Consulta1Component,
    Consulta2Component,
    Consulta3Component,
    Consulta4Component,
    Consulta5Component,
    Consulta6Component,
    Consulta7Component,
    Consulta8Component,
    Consulta9Component,
    Consulta10Component,
    Consulta11Component,
    Consulta12Component,
    Consulta13Component,
    Consulta14Component,
    Consulta15Component,
    Consulta16Component,
    Consulta17Component,
    Consulta18Component,
    Consulta19Component,
    Consulta20Component,
    InventoComponent,
    InvestigadorComponent,
    PaisComponent,
    RegionComponent,
    InventorComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
