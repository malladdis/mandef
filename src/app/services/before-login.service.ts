import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';

@Injectable()
export class BeforeLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.Token.loggedIn();
  }
  constructor(private Token: TokenService) {
  }


}
