import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: any = null;
    this.authService.isAuthorized$.subscribe(value => {
      if (value) {
        currentUser = this.authService.currentUserValue;
      }
      if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: currentUser.result
          }
        });
      }
    });

    return next.handle(request);
    // TODO handle errors
  }
}
