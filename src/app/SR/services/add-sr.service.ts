import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSrService {
  private baseUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) { }

  addService(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-service`, data);
  }
}
