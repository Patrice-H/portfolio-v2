import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*** Integrity of component ***/

  it('should render all menu items', () => {
    expect(screen.getByText('accueil')).toBeDefined();
    expect(screen.getByText('à propos')).toBeDefined();
    expect(screen.getByText('compétences')).toBeDefined();
    expect(screen.getByText('projets')).toBeDefined();
    expect(screen.getByText('contact')).toBeDefined();
  });

  it('should render mobile menu', () => {
    expect(screen.getByAltText('menu')).toBeDefined();
  });
});
