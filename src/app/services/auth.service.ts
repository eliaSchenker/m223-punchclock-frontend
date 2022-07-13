import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../api_config';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to manage authentication
 * Source: https://blog.angular-university.io/angular-jwt-authentication/
 */
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(username:string, password:string) {
        return this.http.post<string>(API_URL + 'auth/login', {username, password}).subscribe((res) => {
          this.setToken(res);
        }, error => {

        })
    }

    private setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    logout(): void {
        localStorage.removeItem("token");
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem('token') != null;
    }
}
