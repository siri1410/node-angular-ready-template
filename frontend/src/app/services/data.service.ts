import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/data`);
  }
}

// This service is responsible for making HTTP requests to the backend API.
// It uses the HttpClient to make GET requests and returns an Observable of the response.
// The API URL is configured in the environment files for different deployment environments.
