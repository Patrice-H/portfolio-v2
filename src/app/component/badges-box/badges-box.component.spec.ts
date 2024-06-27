import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesBoxComponent } from './badges-box.component';

describe('BadgesBoxComponent', () => {
  let component: BadgesBoxComponent;
  let fixture: ComponentFixture<BadgesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
