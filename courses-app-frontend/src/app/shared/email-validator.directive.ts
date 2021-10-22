import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const regex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return regex.test(control.value) ? null : {'emailInvalid' : true};
  }
}
