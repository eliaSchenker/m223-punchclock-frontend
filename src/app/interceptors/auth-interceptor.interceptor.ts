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
 * Interceptor for any HTTP Requests going to the API (Adds the Authentication Bearer Token)
 * Source: https://blog.angular-university.io/angular-jwt-authentication/
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = localStorage.getItem("token");
    if(accessToken)
    {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
        });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((httpErrorResponse: HttpErrorResponse, _: Observable<HttpEvent<any>>) => {
          if (httpErrorResponse.status === HttpStatusCode.Unauthorized) {
            this.authService.logout();
            this.router.navigateByUrl('login');
          }
          return throwError(httpErrorResponse);
        }
      )
    );
  }
}
