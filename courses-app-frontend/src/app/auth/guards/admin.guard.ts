import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userStoreService: UserStoreService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    /*
    this.userStoreService.getUser();
    this.userStoreService.isAdmin$.subscribe(val => {
      console.log(val);
      return val ? true : this.router.navigate(['courses']);
    });
    return true;
    */
    
    

  }
  
}
