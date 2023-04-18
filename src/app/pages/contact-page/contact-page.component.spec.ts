import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import { ContactPageComponent } from './contact-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ContactPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('UI tests suite', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('shoud render title', () => {
      expect(screen.getByText('Contactez moi')).toBeDefined();
    });

    it('should render social networks buttons', () => {
      expect(screen.getAllByAltText('LinkedIn')).toBeDefined();
      expect(screen.getAllByAltText('GitHub')).toBeDefined();
    });

    it('should render form with all fields', () => {
      expect(screen.getByLabelText('Entreprise')).toBeDefined();
      expect(screen.getByLabelText('Nom')).toBeDefined();
      expect(screen.getByLabelText('Prénom')).toBeDefined();
      expect(screen.getByLabelText('E-mail')).toBeDefined();
      expect(screen.getByLabelText('Sujet')).toBeDefined();
      expect(screen.getByTestId('message')).toBeDefined();
    });

    it('should render 2 required fields', () => {
      const requiredFields = screen.getAllByText('* requis');
      expect(requiredFields.length).toEqual(2);
    });

    it('should render submit button', () => {
      const button = screen.getByText('Envoyer');
      expect(button).toBeDefined();
    });

    it('should render an invalid empty form', () => {
      const formValues = component.formContainer.value;
      expect(formValues.companyName).toBe(null);
      expect(formValues.lastName).toBe(null);
      expect(formValues.firstName).toBe(null);
      expect(formValues.eMail).toBe(null);
      expect(formValues.subject).toBe(null);
      expect(formValues.message).toBe(null);
      expect(component.formContainer.status).toBe('INVALID');
    });
  });

  describe('Integration tests suite', () => {
    it('should control required inputs', () => {
      const hostElement = fixture.nativeElement;
      const nameInput = hostElement.querySelector('#lastname');
      const emailInput = hostElement.querySelector('#email');
      nameInput.value = '';
      emailInput.value = '';
      nameInput.dispatchEvent(new Event('input'));
      emailInput.dispatchEvent(new Event('input'));
      const errorLastName = component.formContainer.controls.lastName.errors;
      const errorEmail = component.formContainer.controls.eMail.errors;
      const lastNameRequired =
        errorLastName === null
          ? false
          : errorLastName['required'] === undefined
          ? false
          : true;
      const eMailRequired =
        errorEmail === null
          ? false
          : errorEmail['required'] === undefined
          ? false
          : true;
      expect(lastNameRequired).toBe(true);
      expect(eMailRequired).toBe(true);
      expect(component.formContainer.value.lastName).toEqual(nameInput.value);
      expect(component.formContainer.value.eMail).toEqual(emailInput.value);
      expect(component.formContainer.status).toBe('INVALID');
    });

    it('should control lastname input format', () => {
      const hostElement = fixture.nativeElement;
      const nameInput = hostElement.querySelector('#lastname');
      nameInput.value = 1;
      nameInput.dispatchEvent(new Event('input'));
      const errors = component.formContainer.controls.lastName.errors;
      const errorPattern =
        errors === null
          ? false
          : errors['pattern'] === undefined
          ? false
          : true;
      expect(errors).not.toBe(null);
      expect(errorPattern).toBe(true);
      expect(component.formContainer.status).toBe('INVALID');
    });

    it('should control email input format', () => {
      const hostElement = fixture.nativeElement;
      const emailInput = hostElement.querySelector('#email');
      emailInput.value = 1;
      emailInput.dispatchEvent(new Event('input'));
      const errors = component.formContainer.controls.eMail.errors;
      const errorPattern =
        errors === null
          ? false
          : errors['pattern'] === undefined
          ? false
          : true;
      expect(errors).not.toBe(null);
      expect(errorPattern).toBe(true);
      expect(component.formContainer.status).toBe('INVALID');
    });

    it('should control a valid form', () => {
      const hostElement = fixture.nativeElement;
      const nameInput = hostElement.querySelector('#lastname');
      const emailInput = hostElement.querySelector('#email');
      nameInput.value = 'x';
      emailInput.value = 'x@x.xx';
      nameInput.dispatchEvent(new Event('input'));
      emailInput.dispatchEvent(new Event('input'));
      const errorLastName = component.formContainer.controls.lastName.errors;
      const errorEmail = component.formContainer.controls.eMail.errors;
      expect(errorLastName).toBe(null);
      expect(errorEmail).toBe(null);
      expect(component.formContainer.value.lastName).toEqual(nameInput.value);
      expect(component.formContainer.value.eMail).toEqual(emailInput.value);
      expect(component.formContainer.status).toBe('VALID');
    });
  });
});
