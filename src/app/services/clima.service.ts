import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Inventor} from '../shared/inventor';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiURL = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getClima(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/current.json?key=40dd276769b944dfb7382001202310&q=Guatemala')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAstronomia(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/astronomy.json?key=40dd276769b944dfb7382001202310&q=Guatemala&dt=' + formatDate(new Date(), 'yyyy-MM-dd', 'en') + '')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
