import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseFormComponent } from './course-form/course-form.component';



@NgModule({
  declarations: [
    CourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    CourseModule,
  ],
})
export class CourseModule { }
