// frontend/src/app/data/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environment/environment'


@Injectable({
  providedIn: 'root',
})
export class Usersservice {
  private apiUrl= 'https://hms-v2-ab.onrender.com'
  constructor(private http: HttpClient) { }
  getusers() {
    return this.http.get(`${this.apiUrl}/getBookedServicesData`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  deleteService(_id: string): Observable<any> {
    const url = `${this.apiUrl}/getBookedServicesData/${_id}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateService(editingService: any): Observable<any> {
    const url = `${this.apiUrl}/getBookedServicesData/${editingService._id}`;
    return this.http.put<any>(url, editingService).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
