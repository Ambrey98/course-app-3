import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthResponseData } from 'src/app/models/auth-response-data';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthorized$ = this.isAuthorized$$.asObservable();
  redirectUrl: string | null = null;
  currentUserValue = null;

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) {}


  login(user: object) {
      this.http.post<any>('http://localhost:3000/api/login', user).subscribe((currUser) => {
      this.sessionStorageService.setToken(currUser);
      this.currentUserValue = currUser;
      this.isAuthorized$$.next(currUser.successful);
      return currUser;
    });
  }

  logout() {
    return this.http.delete<any>('http://localhost:3000/api/logout').subscribe(() => {
      this.sessionStorageService.deleteToken();
    });
  }

  register() {}
}
