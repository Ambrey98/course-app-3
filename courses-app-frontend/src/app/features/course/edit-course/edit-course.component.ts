import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  id: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const currentId: string = this.route.snapshot.params['id'];
    this.id = currentId;
  }

  updateCourse() {
    
  }

}
