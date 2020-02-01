import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


class Usuario {
  private username: string;
  private password: string;
  constructor(private user: string, private pass: string) {
    this.password = pass;
    this.username = user;
  }
}



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlAPI = 'http://localhost:8761/api/authenticate';
  private rta: any = null;
  constructor(private httpClient: HttpClient) {
  }

  /** POST: add a new hero to the database */

  public autenticarUsuario(username: string, password: string) {

    let usu = new Usuario(username, password);
    //let params = new HttpParams().append('username', username );
    //params = params.append( 'password', password);
    return this.httpClient.post(this.urlAPI, usu ).pipe(
        catchError(err => {
          console.log('Errorrrrrrrrr');
          return throwError('Error personalizado');
        })
    );






  }
}
