import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';
import { API_URL, httpOptions } from '../api_config';

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

  deleteCategory(id: number): Observable<Object> {
    return this.http.delete(API_URL + "categories" + id, httpOptions);
  }
}
