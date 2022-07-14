import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from '../api_config';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(API_URL + "users/currentuser", httpOptions);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + "users", httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + "auth/register", user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(API_URL + "users", user, httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(API_URL + "users/" + id, httpOptions);
  }
}
