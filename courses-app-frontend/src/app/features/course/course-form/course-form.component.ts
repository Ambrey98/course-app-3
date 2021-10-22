import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  @Input() courseId: string = '';
  courseToEdit: any;
  authors: Array<object> = [];

  courseForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    authors: new FormArray([]),
    authorName: new FormControl('', [Validators.required, authorNameValidation]),
    duration: new FormControl('', [Validators.required, Validators.min(0)])
  });

  constructor(private coursesStoreService: CoursesStoreService, private authorsStoreService: AuthorsStoreService) { }

  ngOnInit(): void {
    this.coursesStoreService.getCourse(this.courseId).pipe(map(val => {
      return this.courseToEdit = (<any>val).result;
    })).subscribe(formValues => {
      this.getAuthorNames(formValues.authors);

      this.courseForm.patchValue({
        title : formValues.title,
        description : formValues.description,
        authors: formValues.authors,
        duration: formValues.duration
      });
    });
    
  }

  onSubmit() {
  }

  getAuthorNames(authors: any) {
    authors.forEach( (auth: any) => {
      this.authorsStoreService.getAuthor(auth).subscribe(value => {
        this.authors.push((<any>value).result.name);
      })
    });
  }

  createAuthor(authName: any) {
    this.courseForm.value.authors.push(authName);
  }

  removeAuthor(index: number) {
    this.courseForm.value.authors.splice(index, 1);
  }

  get title() {
    return this.courseForm.get('title');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

}

function authorNameValidation(control: AbstractControl): ValidationErrors | null {
  return /^[a-zA-Z0-9]+$/.test(control.value) ? null : {'nameInvalid' : true}; 
}
