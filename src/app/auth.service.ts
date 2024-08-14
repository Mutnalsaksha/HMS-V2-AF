import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkAuthentication() {
    throw new Error('Method not implemented.');
  }
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
