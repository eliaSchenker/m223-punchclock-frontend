import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../api_config';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to manage authentication
 * Author: Elia Schenker
 * Last change: 15.07.2022
 * Source for token saving: https://blog.angular-university.io/angular-jwt-authentication/
 */
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    /**
     * Logs in the user using a username and a password
     * @param username The users username
     * @param password The users password
     * @returns An Observable containing the request
     */
    login(username:string, password:string): Observable<string> {
        return this.http.post(API_URL + 'auth/login', {username, password}, {responseType: 'text'});
    }

    /**
     * Saves a JWA Token to the LocalStorage
     * @param token The JWA Token
     */
    public setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    /**
     * Logs out the user (removes the token from the localstorage)
     */
    logout(): void {
        localStorage.removeItem("token");
    }

    /**
     * Returns if the user is logged in
     * @returns Is the User logged in
     */
    public isLoggedIn(): boolean {
        return localStorage.getItem('token') != null;
    }
}
