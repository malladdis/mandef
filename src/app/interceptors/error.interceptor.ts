import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/internal/operators';
import {TokenService} from '../services/token.service';
import {ToasterNotificationService} from '../services/toaster-notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private token: TokenService, private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const toaster = this.injector.get(ToasterNotificationService);
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.token.remove();
        this.router.navigate(['/login']);
      }
      console.log(err);
      const error = err.error.message || err.statusText;
      toaster.error('Unexpected Error', err.message);
      return throwError(error);
    }));
  }
}
