import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components';
import { EmailValidatorDirective } from './email-validator.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from '../features/course/course-form/course-form.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from '../features/course/add-course/add-course.component';
import { EditCourseComponent } from '../features/course/edit-course/edit-course.component';

const components: Object[] = [CourseComponent, CourseFormComponent, EditCourseComponent, SearchComponent, AddCourseComponent];

@NgModule({
  declarations: [components, EmailValidatorDirective, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [components]
})
export class SharedModule { }
