import { Injectable } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticatedValue: boolean = false;

    isAuthenticated(): boolean {
        return this.isAuthenticatedValue;
    }



}
