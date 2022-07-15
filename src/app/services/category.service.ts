import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';
import { API_URL, httpOptions } from '../api_config';

/**
 * Service to manage categories
 * Author: Elia Schenker
 * Last change: 15.07.2022
 * Source for token saving: https://blog.angular-university.io/angular-jwt-authentication/
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + "categories", httpOptions);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + "categories", category, httpOptions);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(API_URL + "categories", category, httpOptions);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(API_URL + "categories/" + id, httpOptions);
  }
}
