import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {TokenService} from './token.service';


@Injectable()
export class AppService {
  constructor(private http: HttpClient, private token: TokenService) { }

  get(url: string) {
    return this.http.get(url);
  }
  post(url: string, postBody: any) {
    return this.http.post(url, postBody);
  }
  put(url: string, id: number ,putBody: any) {
    return this.http.put(`${url}/${id}`, putBody);
  }
  show(url: string, id: number) {
    return this.http.get(`${url}/${id}`);
  }
}
