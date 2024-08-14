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
  private apiUrl= 'http://localhost:2000'
  constructor(private http: HttpClient) { }
  getusers() {
    console.log('Sending request to fetch users...');
    // return this.http.get(`https://admin-backend-3.onrender.com/getBookedServicesData`)
    return this.http.get(`${this.apiUrl}/getBookedServicesData`)
      .pipe(
        tap(data => console.log('Received data from the API:', data)),
        catchError(error => {
          console.error('Error fetching users:', error);
          throw error; // Re-throw the error to propagate it further
        })
      );
  }

  deleteService(_id: string): Observable<any> {
    const url = `${this.apiUrl}/getBookedServicesData/${_id}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError(error);
      })
    );
  }

  updateService(editingService: any): Observable<any> {
    const url = `${this.apiUrl}/getBookedServicesData/${editingService._id}`;
    return this.http.put<any>(url, editingService).pipe(
      tap((updatedService) => console.log('Updated service:', updatedService)),
      catchError((error) => {
        console.error('Error updating service:', error);
        throw error;
      })
    );
  }

}
