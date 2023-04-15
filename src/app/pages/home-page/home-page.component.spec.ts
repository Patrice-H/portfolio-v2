import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';

import { HomePageComponent } from './home-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*** Integrity of page tests ***/

  it('shoud render title', () => {
    expect(screen.getByText(/^Patrice-H/)).toBeDefined();
  });

  it('shoud render slogan', () => {
    expect(screen.getByText(/^Construisons ensemble/)).toBeDefined();
  });

  it('shoud render image', () => {
    expect(screen.getByAltText('main tendue')).toBeDefined();
  });
});
