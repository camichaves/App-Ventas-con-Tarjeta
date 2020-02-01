import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

class Venta {
  montoVenta: number;
  idTarjeta: number;
  idCliente: number;
  constructor(mon: number, idC: number, idT: number) {
    this.idCliente = idC;
    this.idTarjeta = idT;
    this.montoVenta = mon;
  }

}

@Injectable({
  providedIn: 'root'
})
export class VenderService {

  private urlAPI = 'http://localhost:8080/api/venta';

  constructor(private  httpClient: HttpClient) {
  }

  public cargarVenta(monto: number, idC: number, idT: number) {

    let vta = new Venta(monto, idC, idT);
    const httpOptions = { headers: new HttpHeaders({
        Authorization: 'Bearer ' + environment.token
      })}
    return this.httpClient.post(this.urlAPI, vta, httpOptions ).pipe(
        catchError(err => {
          console.log('Errorrrrrrrrr');
          console.log(JSON.stringify(err));
          console.log(err.error.error_texto);
          return throwError(err.error.error_texto);
        })
    );
  }
}
