import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSrService {
  private baseUrl = 'https://hms-v2-ab.onrender.com';

  constructor(private http: HttpClient) { }

  addService(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-service`, data);
  }
}
