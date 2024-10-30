import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChoiceModalComponent } from './icon-choice-modal.component';

describe('IconChoiceModalComponent', () => {
  let component: IconChoiceModalComponent;
  let fixture: ComponentFixture<IconChoiceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconChoiceModalComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(IconChoiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
