import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private name$$: Subject<string> = new BehaviorSubject<string>('');
  private isAdmin$$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  name$ = this.name$$.asObservable();
  isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) { }

  getUser() {
    return this.userService.get().subscribe(
      (val) => {
        this.isAdmin$$.next((<any>val).result.role === 'admin');
        this.name$$.next(val.result.name);
      }
    );
  }
}
