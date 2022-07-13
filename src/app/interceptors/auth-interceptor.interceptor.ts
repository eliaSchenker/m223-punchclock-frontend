import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interceptor for any HTTP Requests going to the API (Adds the Authentication Bearer Token)
 * Source: https://blog.angular-university.io/angular-jwt-authentication/
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = sessionStorage.getItem("access_token");
    if(accessToken)
    {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
        });
    }
    return next.handle(request);
  }
}
