import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router, private sessionStorageService: SessionStorageService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.currentUserValue ? true : this.router.navigate(['/login']);
  }
}
