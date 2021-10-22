import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canActivate: [NotAuthorizedGuard]},
  {path: 'register', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule), canActivate: [NotAuthorizedGuard]},
  {path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule), canLoad: [AuthorizedGuard]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
