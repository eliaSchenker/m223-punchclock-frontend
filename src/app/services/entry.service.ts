import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from '../api_config';
import { Entry } from '../model/Entry';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to manage entries
 * Author: Elia Schenker
 * Last change: 15.07.2022
 */
export class EntryService {

  constructor(private http: HttpClient) { }

  /**
   * Returns all entries
   * @returns Request Observable (entry array)
  */
  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(API_URL + "entries", httpOptions);
  }

  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(API_URL + "entries", entry, httpOptions);
  }

  updateEntry(entry: Entry): Observable<Entry> {
    return this.http.put<Entry>(API_URL + "entries", entry, httpOptions);
  }

  deleteEntry(id: number): Observable<Object> {
    return this.http.delete(API_URL + "entries/" + id, httpOptions);
  }
}
