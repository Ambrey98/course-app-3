import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<object> {
    return this.http.get<object>('http://localhost:3000/api/authors/all').pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  add(author: Author): Observable<object> {
    return this.http.post<object>('http://localhost:3000/api/authors/add', author).pipe(
      catchError(this.handleError)
    );
  }

  get(id: string): Observable<object> {
    return this.http.get<object>(`http://localhost:3000/api/authors/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) console.error('An error occurred:', error.error);
    else console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError('Something bad happened; please try again later.');
  }

}
