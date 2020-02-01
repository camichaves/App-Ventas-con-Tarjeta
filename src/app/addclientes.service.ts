import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

class Cliente {
  nombre: string;
  apellido: string;
  constructor(nom: string, ape: string) {
    this.nombre = nom;
    this.apellido = ape;
  }

}

@Injectable({
  providedIn: 'root'
})
export class AddclientesService {

  urlAPI: string = 'http://localhost:8080/api/cliente/agregar';
  constructor(private httpClient: HttpClient) { }

  public cargarCliente(nombre: string, apellido: string) {

    let cli = new Cliente(nombre, apellido);
    const httpOptions = { headers: new HttpHeaders({
        Authorization: 'Bearer ' + environment.token
      })}
    return this.httpClient.post(this.urlAPI, cli, httpOptions ).pipe(
        catchError(err => {
          console.log('Errorrrrrrrrr');
          console.log(JSON.stringify(err));
          console.log(err.error.error_texto);
          return throwError(err.error.error_texto);
        })
    );
  }
}
