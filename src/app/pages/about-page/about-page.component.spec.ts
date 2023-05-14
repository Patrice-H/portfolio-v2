import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import { AboutPageComponent } from './about-page.component';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('UI tests suite', () => {
    it('should create the page component', () => {
      expect(component).toBeTruthy();
    });
    it('should render the title', () => {
      expect(screen.getByText(/à propos/)).toBeDefined();
    });
    it('should render the text', () => {
      expect(screen.getByText(/^Bonjour, je m'appelle Patrice/)).toBeDefined();
    });
    it('should render the image', () => {
      expect(
        screen.getByAltText('livre transformé en ordinateur portable')
      ).toBeDefined();
    });
  });
});
