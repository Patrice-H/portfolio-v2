import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  lastNameError!: String;
  eMailError!: String;
  messageError: String = '255 caractères maximum';

  lastNameLabel: String = 'Nom';
  firstNameLabel: String = 'Prénom';
  companyLabel: String = 'Entreprise';
  eMailLabel: String = 'Email';
  subjectLabel: String = 'Sujet';
  messageLabel: String = 'Message';
  buttonLabel: String = 'Envoyer';
  pLabel: String = '* Champs requis';

  firstName: FormControl = new FormControl(null, []);
  lastName: FormControl = new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[A-Za-z]+$/),
  ]);
  companyName: FormControl = new FormControl(null, []);
  eMail: FormControl = new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  ]);
  subject: FormControl = new FormControl(null, []);
  message: FormControl = new FormControl(null, [Validators.maxLength(255)]);

  updateErrorMessage(control: any): void {
    switch (control.id) {
      case 'lastname':
        this.controlLastName();
        break;
      case 'email':
        this.controlEmail();
        break;
      case 'message':
        this.controlMessage();
        console.log(control);
        break;
      default:
        break;
    }
  }

  controlLastName(): void {
    if (this.lastName.hasError('required')) {
      this.lastNameError = 'Requis*';
    } else if (this.lastName.hasError('pattern')) {
      this.lastNameError = 'Format invalide';
    } else {
      this.lastNameError = '';
    }
  }

  controlEmail(): void {
    if (this.eMail.hasError('required')) {
      this.eMailError = 'Requis*';
    } else if (this.eMail.hasError('pattern')) {
      this.eMailError = 'Format invalide';
    } else {
      this.eMailError = '';
    }
  }

  controlMessage(): void {
    if (this.message.hasError('max-length')) {
      this.messageError = '255 caractères maximum';
    } else {
      this.messageError = '';
    }
  }
}
