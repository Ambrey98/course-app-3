import { Component, Input, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { ConfirmModalWindowComponent } from '../../common/confirm-modal-window/confirm-modal-window.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: any[] = [];
  @Input() isEditable: boolean = false;
  editIcon = '<i class="fa fa-edit"></i>';
  deleteIcon = '<i class="fa fa-trash"></i>';

  constructor(private userStoreService: UserStoreService,
              private coursesStoreService: CoursesStoreService) { }

  ngOnInit(): void {
    this.userStoreService.isAdmin$.subscribe(value => {
      this.isEditable = value;
    });
    this.userStoreService.getUser();
  }

  deleteCourse(courseId: string): void {
    this.coursesStoreService.deleteCourse(courseId);
    this.coursesStoreService.courses$.subscribe(val => {
      console.log('deleted');
      this.courses = (<any>val).result;
    });
    this.coursesStoreService.getAllCourses();
  }

}