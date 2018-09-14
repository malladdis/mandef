import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenService} from './token.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';
@Injectable()
export class AuthService {
  API_URL = 'http://localhost:8000/api';
  isLogged = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  comp: undefined;
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  currentToken: string;
  constructor(private httpclient: HttpClient, private router: Router, private Token: TokenService) { }

  login(username, password) {
    return this.httpclient
      .post(
        this.API_URL + '/auth/login',
        JSON.stringify({
          email: username,
          password: password,
        }),
        this.httpOptions
      );
  }
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);

  }
  getContent() {
    return this.authStatus;
  }
  getToken() {
    return this.httpclient.get(`${this.API_URL}/refresh`).subscribe((data: Object) => {
        return data['token'];
    });
  }
  refresh() {
    return Observable.of(this.getToken()).delay(20000);
  }
}
