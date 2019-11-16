import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string = null;
  constructor(private http: HttpClient) { }

  login(data) {
    return new Promise( res => {
      this.http.post(`${URL}/login`, data)
      .subscribe(async (resp: validacion) => {
          if (resp.ok) {
            console.log(resp.token1);
            await this.guardarToken(resp.token1);
            res(true);
          } else {
            res(false);
          }
      });

    });
  }

  register(data) {
    return new Promise(res => {
      this.http.post(`${URL}/register`, data)
      .subscribe( async ( resp: validacion) => {
        if (resp.ok) {
          console.log(resp.token1);
          await this.guardarToken(resp.token1);
          res(true);
        } else {
          res(false);
        }
      });
    });
  }

  async guardarToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token );
  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = null;
    }

    return this.userToken;
  }
}

// tslint:disable-next-line: class-name
interface validacion {
  ok: boolean;
  message: string;
  token1: string;
}


