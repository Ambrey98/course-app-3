import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isAuthorized$) {
      return true
    };

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the courses page
    return this.router.parseUrl('/courses');
  }
  
}
