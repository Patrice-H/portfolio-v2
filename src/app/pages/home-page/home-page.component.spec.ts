import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
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
    expect(
      screen.getByText('Contruisons ensemble vos projets numériques')
    ).toBeDefined();
  });

  it('shoud render image', () => {
    expect(screen.getByAltText('main tendue')).toBeDefined();
  });
});
