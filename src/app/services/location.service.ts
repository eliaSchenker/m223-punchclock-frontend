import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from '../api_config';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(API_URL + "locations", httpOptions);
  }

  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(API_URL + "locations", location, httpOptions);
  }

  updateLocation(location: Location): Observable<Location> {
    return this.http.put<Location>(API_URL + "locations", location, httpOptions);
  }

  deleteLocation(id: number): Observable<Object> {
    return this.http.delete(API_URL + "locations" + id, httpOptions);
  }
}
