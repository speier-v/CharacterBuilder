import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelChoiceDropdownComponent } from './level-choice-dropdown.component';

describe('LevelChoiceDropdownComponent', () => {
  let component: LevelChoiceDropdownComponent;
  let fixture: ComponentFixture<LevelChoiceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelChoiceDropdownComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LevelChoiceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
