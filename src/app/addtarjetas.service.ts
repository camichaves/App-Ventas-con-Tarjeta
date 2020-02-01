import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

class Tarjeta {
  tipo: string;
  numero: number;
  codSeguridad: number;
  fechaVencimiento: number;
  montoMax: number;
  constructor(tipo: string, numero: number, cod: number, venc: number, montomax: number) {
    this.tipo = tipo;
    this.numero = numero;
    this.codSeguridad = cod;
    this.fechaVencimiento = venc;
    this.montoMax = montomax;
  }

}

@Injectable({
  providedIn: 'root'
})
export class AddtarjetasService {

  urlAPI: string = 'http://localhost:8080/api/tarjeta/agregar';
  constructor(private httpClient: HttpClient) { }

  public cargarTarjeta(tipo: string, numero: number, cod: number, venc: number, montomax: number) {

    let tarj = new Tarjeta(tipo, numero, cod, venc, montomax);
    const httpOptions = { headers: new HttpHeaders({
        Authorization: 'Bearer ' + environment.token
      })}
    return this.httpClient.post(this.urlAPI, tarj, httpOptions ).pipe(
        catchError(err => {
          console.log('Errorrrrrrrrr');
          console.log(JSON.stringify(err));
          console.log(err.error.error_texto);
          return throwError(err.error.error_texto);
        })
    );
  }
}
