import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Invento} from '../shared/invento';
import {Investigador} from '../shared/investigador';
import {Pais} from '../shared/pais';
import {Inventor} from '../shared/inventor';
import {Region} from '../shared/region';
import {Frontera} from '../shared/frontera';
import {Area} from '../shared/area';
import {Encuesta} from '../shared/encuesta';
import {Pregunta} from '../shared/pregunta';
import {Respuesta} from '../shared/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://wannan-1b398.uc.r.appspot.com';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'cross-origin': 'anonymous'
    })
  };

  getInventores(): Observable<Inventor> {
    // @ts-ignore
    return this.http.get<Inventor>(this.apiURL + '/inventor')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getInventor(id): Observable<Inventor> {
    return this.http.get<Inventor>(this.apiURL + '/inventor/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createInventor(inventor): Observable<Inventor> {
    return this.http.post<Inventor>(this.apiURL + '/inventor', JSON.stringify(inventor), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateInventor(id, inventor): Observable<Inventor> {
    return this.http.put<Inventor>(this.apiURL + '/inventor/' + id, JSON.stringify(inventor), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteInventor(id){
    return this.http.delete<Inventor>(this.apiURL + '/inventor/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllInventores(){
    return this.http.delete<Inventor>(this.apiURL + '/inventor', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getInventos(): Observable<Invento>
  {
    return this.http.get<Invento>(this.apiURL + '/invento')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getInvento(id): Observable<Invento> {
    return this.http.get<Invento>(this.apiURL + '/invento/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createInvento(invento): Observable<Invento> {
    return this.http.post<Invento>(this.apiURL + '/invento', JSON.stringify(invento), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateInvento(id, invento): Observable<Invento> {
    return this.http.put<Invento>(this.apiURL + '/invento/' + id, JSON.stringify(invento), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteInvento(id){
    return this.http.delete<Invento>(this.apiURL + '/invento/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllInventos(){
    return this.http.delete<Invento>(this.apiURL + '/invento', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getInvestigadores(): Observable<Investigador>
  {
    return this.http.get<Investigador>(this.apiURL + '/investigador')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getInvestigador(id): Observable<Investigador> {
    return this.http.get<Investigador>(this.apiURL + '/investigador/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createInvestigador(investigador): Observable<Investigador> {
    return this.http.post<Investigador>(this.apiURL + '/investigador', JSON.stringify(investigador), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateInvestigador(id, investigador): Observable<Investigador> {
    return this.http.put<Investigador>(this.apiURL + '/investigador/' + id, JSON.stringify(investigador), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteInvestigador(id){
    return this.http.delete<Investigador>(this.apiURL + '/investigador/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllInvestigadores(){
    return this.http.delete<Investigador>(this.apiURL + '/investigador', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPaises(): Observable<Pais>
  {
    return this.http.get<Pais>(this.apiURL + '/paises')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPais(id): Observable<Pais> {
    return this.http.get<Pais>(this.apiURL + '/paises/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createPais(pais): Observable<Pais> {
    return this.http.post<Pais>(this.apiURL + '/paises', JSON.stringify(pais), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updatePais(id, pais): Observable<Pais> {
    return this.http.put<Pais>(this.apiURL + '/paises/' + id, JSON.stringify(pais), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deletePais(id){
    return this.http.delete<Pais>(this.apiURL + '/paises/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllPaises(){
    return this.http.delete<Pais>(this.apiURL + '/paises', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRegiones(): Observable<Region>
  {
    return this.http.get<Region>(this.apiURL + '/regions')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRegion(id): Observable<Region> {
    return this.http.get<Region>(this.apiURL + '/regions/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createRegion(region): Observable<Region> {
    return this.http.post<Region>(this.apiURL + '/regions', JSON.stringify(region), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateRegion(id, region): Observable<Region> {
    return this.http.put<Region>(this.apiURL + '/regions/' + id, JSON.stringify(region), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteRegion(id){
    return this.http.delete<Region>(this.apiURL + '/regions/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllRegiones(){
    return this.http.delete<Region>(this.apiURL + '/regions', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getFronteras(): Observable<Frontera>
  {
    return this.http.get<Frontera>(this.apiURL + '/frontera')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getFrontera(id): Observable<Frontera>
  {
    return this.http.get<Frontera>(this.apiURL + '/frontera/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createFrontera(frontera): Observable<Frontera> {
    return this.http.post<Frontera>(this.apiURL + '/frontera', JSON.stringify(frontera), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateFrontera(id, frontera): Observable<Frontera> {
    return this.http.put<Frontera>(this.apiURL + '/frontera/' + id, JSON.stringify(frontera), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteFrontera(id){
    return this.http.delete<Frontera>(this.apiURL + '/frontera/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllFronteras(){
    return this.http.delete<Frontera>(this.apiURL + '/frontera', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAreas(): Observable<Area>
  {
    return this.http.get<Area>(this.apiURL + '/area')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getArea(id): Observable<Area>
  {
    return this.http.get<Area>(this.apiURL + '/area/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createArea(area): Observable<Area> {
    return this.http.post<Area>(this.apiURL + '/area', JSON.stringify(area), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateArea(id, area): Observable<Area> {
    return this.http.put<Area>(this.apiURL + '/area/' + id, JSON.stringify(area), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteArea(id){
    return this.http.delete<Area>(this.apiURL + '/area/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllAreas(){
    return this.http.delete<Area>(this.apiURL + '/area', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getEncuestas(): Observable<Encuesta>
  {
    return this.http.get<Encuesta>(this.apiURL + '/encuestas')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getEncuesta(id): Observable<Encuesta>
  {
    return this.http.get<Encuesta>(this.apiURL + '/encuestas/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createEncuesta(encuestas): Observable<Encuesta> {
    return this.http.post<Encuesta>(this.apiURL + '/encuestas', JSON.stringify(encuestas), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateEncuesta(id, encuestas): Observable<Encuesta> {
    return this.http.put<Encuesta>(this.apiURL + '/encuestas/' + id, JSON.stringify(encuestas), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteEncuesta(id){
    return this.http.delete<Encuesta>(this.apiURL + '/encuestas/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllEncuestas(){
    return this.http.delete<Encuesta>(this.apiURL + '/encuestas', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPreguntas(): Observable<Pregunta>
  {
    return this.http.get<Pregunta>(this.apiURL + '/pregunta')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPregunta(id): Observable<Pregunta>
  {
    return this.http.get<Pregunta>(this.apiURL + '/pregunta/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createPregunta(pregunta): Observable<Pregunta> {
    return this.http.post<Pregunta>(this.apiURL + '/pregunta', JSON.stringify(pregunta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updatePregunta(id, pregunta): Observable<Pregunta> {
    return this.http.put<Pregunta>(this.apiURL + '/pregunta/' + id, JSON.stringify(pregunta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deletePregunta(id){
    return this.http.delete<Pregunta>(this.apiURL + '/pregunta/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllPreguntas(){
    return this.http.delete<Pregunta>(this.apiURL + '/pregunta', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRespuestas(): Observable<Respuesta>
  {
    return this.http.get<Respuesta>(this.apiURL + '/respuesta')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRespuesta(id): Observable<Respuesta>
  {
    return this.http.get<Respuesta>(this.apiURL + '/respuesta/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createRespuesta(respuesta): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.apiURL + '/respuesta', JSON.stringify(respuesta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateRespuestas(id, respuesta): Observable<Respuesta> {
    return this.http.put<Respuesta>(this.apiURL + '/respuesta/' + id, JSON.stringify(respuesta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:typedef
  deleteRespuesta(id){
    return this.http.delete<Respuesta>(this.apiURL + '/respuesta/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  deleteAllRespuestas(){
    return this.http.delete<Respuesta>(this.apiURL + '/respuesta', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getconsulta1(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/1')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta2(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/2')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta3(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/3')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta4(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/4')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta5(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/5')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta6(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/6')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta7(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/7')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta8(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/8')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta8_1(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/8/1')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta8_2(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/8/2')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta9(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/9')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta10(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/10')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta11(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/11')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta12(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/12')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta13(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/13')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta14(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/14')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta15(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/15')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta16(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/16')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta17(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/17')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta18(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/18')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta19(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/19')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta20(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/20')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta20_1(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/20/1')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getconsulta20_2(): Observable<any>
  {
    return this.http.get<any>(this.apiURL + '/consultas/20/2')
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
