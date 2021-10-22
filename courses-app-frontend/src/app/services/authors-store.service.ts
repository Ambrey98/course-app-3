import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { Author } from '../models/author';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  /**
   * Self note - Benefits of BehaviorSubject:
   *  - It will always return a value, even if no data has been emitted from its stream yet
   *  - When you subscribe to it, it will immediately return the last value that was emitted immediately
   *    (or the initial value if no data has been emitted yet)
   */

  private isLoading$$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private authors$$: Subject<Array<object>> = new BehaviorSubject<Array<object>>([]);
  isLoading$ = this.isLoading$$.asObservable();
  authors$ = this.authors$$.asObservable();

  constructor(private authorService: AuthorsService) { }

  getAll() {
    this.authorService.getAll().subscribe((data: any) => {
      this.authors$$.next(data);
    },
    (err: any) => {
      console.error(err);
    });
  }

  getAuthor(id: string) {
   return this.authorService.get(id);
  }

  addAuthor(author: Author) {
    return this.authorService.add(author).subscribe((data: any) => {
    });
  }
}
