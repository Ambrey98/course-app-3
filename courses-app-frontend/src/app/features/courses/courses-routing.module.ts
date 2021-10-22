import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "src/app/auth/guards/admin.guard";
import { AuthorizedGuard } from "src/app/auth/guards/authorized.guard";
import { CoursesComponent } from "src/app/shared/components";
import { AddCourseComponent } from "../course/add-course/add-course.component";
import { EditCourseComponent } from "../course/edit-course/edit-course.component";

const routes: Routes = [
    {path: '', canLoad: [AuthorizedGuard], children: [
    {path: '', component: CoursesComponent},
    {path: 'add', component: AddCourseComponent, canActivate: [AdminGuard]},
    {path: 'edit/:id', component: EditCourseComponent, canActivate: [AdminGuard]},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}