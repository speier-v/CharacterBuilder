import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassChoiceDropdownComponent } from './class-choice-dropdown.component';

describe('ClassChoiceDropdownComponent', () => {
  let component: ClassChoiceDropdownComponent;
  let fixture: ComponentFixture<ClassChoiceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassChoiceDropdownComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClassChoiceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
