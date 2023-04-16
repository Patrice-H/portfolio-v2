import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen, render } from '@testing-library/angular';
import { ContactPageComponent } from './contact-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*** Integrity component tests UI */

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
