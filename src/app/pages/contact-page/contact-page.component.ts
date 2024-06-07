import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge, takeUntil} from 'rxjs';
import {  } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent{
  errorMessage!: String;
  formContainer = new FormGroup({
    firstName: new FormControl(null, []),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
    companyName: new FormControl(null, []),
    eMail: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]),
    subject: new FormControl(null, []),
    message: new FormControl(null, [Validators.maxLength(255)]),
  });

  constructor() {
    merge(this.formContainer.controls.lastName.statusChanges, this.formContainer.controls.lastName.valueChanges)
      .pipe(takeUntil(this.formContainer.controls.lastName.valueChanges))
      .subscribe(() => this.updateErrorMessage());
  }

  openNewPage(link: string) {
    window.open(link);
  }

  onSubmitForm(): void {
    console.log(this.formContainer.value);
  }

  updateErrorMessage() {
    if (this.formContainer.controls.lastName.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.formContainer.controls.lastName.hasError('pattern')) {
      this.errorMessage = 'Not a valid format';
    } else {
      this.errorMessage = '';
    }
  }
}
