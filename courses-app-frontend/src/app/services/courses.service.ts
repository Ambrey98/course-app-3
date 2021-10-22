import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<object> {
    return this.http.get<object>('http://localhost:3000/api/courses/all');
  }

  create(course: Course): Observable<object> {
    return this.http.post<object>('http://localhost:3000/api/courses/add', course);
  }

  edit(course: Course, id: string): Observable<object> {
    return this.http.put(`http://localhost:3000/api/courses/${id}`, course);
  }

  get(id: string): Observable<object> {
    return this.http.get(`http://localhost:3000/api/courses/${id}`);
  }

  delete(id: string): Observable<object> {
    return this.http.delete(`http://localhost:3000/api/courses/${id}`);
  }
}
