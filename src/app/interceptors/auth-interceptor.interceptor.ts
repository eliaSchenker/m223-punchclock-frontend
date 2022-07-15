import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

/**
 * Interceptor for any HTTP Requests going to the API
 * Adds an Authentication Header (Bearer JWA Token)
 * Redirects to login if a request returns 401
 * Redirects to index if a request returns 403
 * Author: Elia Schenker
 * Last change: 15.07.2022
 * Source: https://blog.angular-university.io/angular-jwt-authentication/
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Intercepts any httpRequest sent by the application
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = localStorage.getItem("token");
    if(accessToken)
    {
      //Add the Authorization Bearer Token if it exists in the localStorage
      request = request.clone({
      setHeaders: {
          Authorization: `Bearer ${accessToken}`
      }});
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((httpErrorResponse: HttpErrorResponse, _: Observable<HttpEvent<any>>) => {
        if (httpErrorResponse.status === HttpStatusCode.Unauthorized) {
          //If the server returns 401 (Unauthorized), logout and redirect to login
          this.authService.logout();
          this.router.navigateByUrl('login');
        }else if(httpErrorResponse.status === HttpStatusCode.Forbidden) {
          //If the server returns 403 (Forbidden), redirect to the index page
          this.router.navigateByUrl('');
        }
        return throwError(httpErrorResponse);
      })
    );
  }
}
