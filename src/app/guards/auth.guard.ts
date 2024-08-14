// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    // Check your authentication logic here
    const isAuthenticated = true; // Replace with your actual authentication check

    if (isAuthenticated) {
      return true;
    } else {
      // Navigate to the login page if not authenticated
      return this.router.parseUrl('/login');
    }
  }
}
