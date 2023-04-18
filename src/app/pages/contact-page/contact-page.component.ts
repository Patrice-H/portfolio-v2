import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
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

  onSubmitForm(): void {
    console.log(this.formContainer.value);
  }

  openNewPage(link: string) {
    window.open(link);
  }
}
