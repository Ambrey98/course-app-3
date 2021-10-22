import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

const mockCourseCard = {
  title : 'Angular',
  description : `very good, wow such a muchy i dunno what to say, this description is getting longer
  and longer, why didn't I use lorem ipsum? idk it is a good question but im done with this i think.`,
  creationDate : new Date(Date.now()),
  duration: 77,
  authors : ['Michael', 'Rosy', 'George']
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any = {};
  confirmModalHidden: boolean = true;
  buttonText:string = 'Show modal';
  username: string = '';

  constructor(private coursesStoreService: CoursesStoreService,
              private userStoreService: UserStoreService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.coursesStoreService.courses$.pipe(map(val => {
      return this.courses = (<any>val).result;
    })).subscribe();

    this.userStoreService.name$.subscribe(uname => {
      console.log(uname);
      this.username = uname;
    })
    this.coursesStoreService.getAllCourses();
    this.userStoreService.getUser();
  }

  onLogoutBtn() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
