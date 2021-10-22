import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Course } from '../models/course';
import { CoursesService } from './courses.service';


@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private courses$$: Subject<Array<object>> = new BehaviorSubject<Array<object>>([]);
  private isLoading$$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  courses$ = this.courses$$.asObservable();
  isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) { }

  getAllCourses() {
    this.coursesService.getAll().subscribe((data: any) => {
      this.courses$$.next(data);
    },
    (err) => {
      console.error(err);
    });
  }

  createCourse(course: Course) {
    this.coursesService.create(course).subscribe((data: any) => {
      // Do smth
    });
  }

  editCourse(course: Course, id: string) {
    this.coursesService.edit(course, id).subscribe((data: any) => {
      // Do smth
    })
  }

  getCourse(id: string) {
    return this.coursesService.get(id);
  }

  deleteCourse(id: string) {
    this.coursesService.delete(id).subscribe();
  }
}
