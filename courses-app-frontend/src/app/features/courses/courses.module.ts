import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from '../common/header/header.component';
import { ButtonComponent } from '../common/button/button.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ConfirmModalWindowComponent } from '../common/confirm-modal-window/confirm-modal-window.component';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    HeaderComponent,
    ButtonComponent,
    CourseCardComponent,
    CourseListComponent,
    ConfirmModalWindowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule {
}
