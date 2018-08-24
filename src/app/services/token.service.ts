import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable()
export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/auth/login',
    signup: 'http://localhost:8000/api/auth/signup'
  };
  constructor() { }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('access_token', token);
  }
  get() {
    return localStorage.getItem('access_token');
  }

  remove() {
    localStorage.removeItem('access_token');
  }

  isValid() {
    return !this.isTokenExpired(this.get());
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }


 getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded['exp'] === undefined) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(decoded['exp']);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) { token = this.get(); }
    if (!token) {  return true; }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

}
