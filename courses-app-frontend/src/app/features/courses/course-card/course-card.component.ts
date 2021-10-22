import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

interface IFCourseCard {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
  id: string
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() courseCard!: IFCourseCard;
  editable: boolean = false;
  authors: Array<object> = [];

  constructor(private authorsStoreService: AuthorsStoreService) { }

  ngOnInit(): void {
    this.getAuthorNames();
  }

  getAuthorNames() {
    this.courseCard.authors.forEach(authorId => {
        this.authorsStoreService.getAuthor(authorId).subscribe(author => {
          this.authors.push((<any>author).result.name)
        });
    })
  }

  public convertDuration(time: number): string {
    let [hours, minutes] = [0, 0];
    if (time >= 60) {
      hours = Math.floor(time * 60 / 3600);
      minutes = (time * 60 - hours * 3600) / 60;
    } else {
      minutes = time;
    }
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} hours`;
  }

}
