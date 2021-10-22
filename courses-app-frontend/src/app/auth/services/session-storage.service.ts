import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(private window: Window) { }

  setToken(token: string) {
    this.window.sessionStorage.setItem('loggedIn', JSON.stringify(token));
  }

  getToken() {
    return this.window.sessionStorage.getItem('loggedIn');
  }

  deleteToken() {
    this.window.sessionStorage.removeItem('loggedIn');
  }
}
