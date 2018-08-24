import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../app.constants';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OuterService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private app: AppService, private http: HttpClient) { }

  index() {
    return this.http.get(apiRoutes.outer.index, this.httpOptions);
  }
}
