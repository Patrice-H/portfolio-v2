import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import { SkillsPageComponent } from './skills-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SkillsPageComponent', () => {
  let component: SkillsPageComponent;
  let fixture: ComponentFixture<SkillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('UI tests suite', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should render all tabs', () => {
      expect(screen.getByText('Analyse - Conception')).toBeTruthy();
      expect(screen.getByText('Développement frontend')).toBeTruthy();
      expect(screen.getByText('Développement backend')).toBeTruthy();
      expect(screen.getByText('UX - Design')).toBeTruthy();
    });

    it('should render all images of analyse and conception skills', () => {
      expect(screen.getByAltText('UML')).toBeTruthy();
      expect(screen.getByAltText('Agile')).toBeTruthy();
      expect(screen.getByAltText('Jira')).toBeTruthy();
      expect(screen.getByAltText('Sketch')).toBeTruthy();
      expect(screen.getByAltText('Notion')).toBeTruthy();
      expect(screen.getByAltText('Trello')).toBeTruthy();
      expect(screen.getByAltText('GitHub')).toBeTruthy();
    });

    it('should render all titles of analyse and conception skills', () => {
      expect(screen.getByText('UML')).toBeTruthy();
      expect(screen.getByText('Agile')).toBeTruthy();
      expect(screen.getByText('Jira')).toBeTruthy();
      expect(screen.getByText('Sketch')).toBeTruthy();
      expect(screen.getByText('Notion')).toBeTruthy();
      expect(screen.getByText('Trello')).toBeTruthy();
      expect(screen.getByText('GitHub')).toBeTruthy();
    });
  });

  describe('Integration tests suite', () => {
    it('should render all images of frontend dev skills when user click on tab', () => {
      const button = fixture.debugElement.query(By.css('#frontend-skills'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const images: any[] = Array.from(
          fixture.debugElement.nativeElement.querySelectorAll('img')
        );
        expect(images[0].alt).toBe('HTML5');
        expect(images[1].alt).toBe('CSS3');
        expect(images[2].alt).toBe('JavaScript');
        expect(images[3].alt).toBe('SASS');
        expect(images[4].alt).toBe('TypeScript');
        expect(images[5].alt).toBe('Angular');
        expect(images[6].alt).toBe('React');
        expect(images[7].alt).toBe('Redux');
        expect(images[8].alt).toBe('Jasmine');
        expect(images[9].alt).toBe('Jest');
        expect(images[10].alt).toBe('Testing Library');
      });
      expect(button.classes['active-skills']).toBe(true);
    });

    it('should render all titles of frontend dev skills when user click on tab', () => {
      const button = fixture.debugElement.query(By.css('#frontend-skills'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const titles: any[] = Array.from(
          fixture.debugElement.nativeElement.querySelectorAll('h3')
        );
        expect(titles[0].innerHTML).toBe('HTML5');
        expect(titles[1].innerHTML).toBe('CSS3');
        expect(titles[2].innerHTML).toBe('JavaScript');
        expect(titles[3].innerHTML).toBe('SASS');
        expect(titles[4].innerHTML).toBe('TypeScript');
        expect(titles[5].innerHTML).toBe('Angular');
        expect(titles[6].innerHTML).toBe('React');
        expect(titles[7].innerHTML).toBe('Redux');
        expect(titles[8].innerHTML).toBe('Jasmine');
        expect(titles[9].innerHTML).toBe('Jest');
        expect(titles[10].innerHTML).toBe('Testing Library');
      });
      expect(button.classes['active-skills']).toBe(true);
    });

    it('should render all images of backend dev skills when user click on tab', () => {
      const button = fixture.debugElement.query(By.css('#backend-skills'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const images: any[] = Array.from(
          fixture.debugElement.nativeElement.querySelectorAll('img')
        );
        expect(images[0].alt).toBe('PHP');
        expect(images[1].alt).toBe('NodeJs');
        expect(images[2].alt).toBe('Java');
        expect(images[3].alt).toBe('PhpUnit');
        expect(images[4].alt).toBe('Swagger');
        expect(images[5].alt).toBe('Junit');
        expect(images[6].alt).toBe('Oracle');
        expect(images[7].alt).toBe('MongoDb');
        expect(images[8].alt).toBe('MySql');
        expect(images[9].alt).toBe('MariaDb');
      });
      expect(button.classes['active-skills']).toBe(true);
    });

    it('should render all titles of backend dev skills when user click on tab', () => {
      const button = fixture.debugElement.query(By.css('#backend-skills'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const titles: any[] = Array.from(
          fixture.debugElement.nativeElement.querySelectorAll('h3')
        );
        expect(titles[0].innerHTML).toBe('PHP');
        expect(titles[1].innerHTML).toBe('NodeJs');
        expect(titles[2].innerHTML).toBe('Java');
        expect(titles[3].innerHTML).toBe('PhpUnit');
        expect(titles[4].innerHTML).toBe('Swagger');
        expect(titles[5].innerHTML).toBe('Junit');
        expect(titles[6].innerHTML).toBe('Oracle');
        expect(titles[7].innerHTML).toBe('MongoDb');
        expect(titles[8].innerHTML).toBe('MySql');
        expect(titles[9].innerHTML).toBe('MariaDb');
      });
      expect(button.classes['active-skills']).toBe(true);
    });

    it('should render all images of UX - Design skills when user click on tab', () => {
      const button = fixture.debugElement.query(By.css('#design-skills'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const images: any[] = Array.from(
          fixture.debugElement.nativeElement.querySelectorAll('img')
        );
        expect(images[0].alt).toBe('Photoshop');
        expect(images[1].alt).toBe('Illustrator');
        expect(images[2].alt).toBe('Figma');
        expect(images[3].alt).toBe('Xd');
        expect(images[4].alt).toBe('Flash Pro');
        expect(images[5].alt).toBe('dreamWeaver');
      });
      expect(button.classes['active-skills']).toBe(true);
    });

    it('should render all titles of UX - Design skills when user click on tab', () => {
      const button = fixture.debugElement.query(By.css('#design-skills'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const titles: any[] = Array.from(
          fixture.debugElement.nativeElement.querySelectorAll('h3')
        );
        expect(titles[0].innerHTML).toBe('Photoshop');
        expect(titles[1].innerHTML).toBe('Illustrator');
        expect(titles[2].innerHTML).toBe('Figma');
        expect(titles[3].innerHTML).toBe('Xd');
        expect(titles[4].innerHTML).toBe('Flash Pro');
        expect(titles[5].innerHTML).toBe('dreamWeaver');
      });
      expect(button.classes['active-skills']).toBe(true);
    });
  });
});
