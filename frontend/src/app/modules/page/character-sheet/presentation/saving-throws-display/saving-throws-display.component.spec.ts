import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingThrowsDisplayComponent } from './saving-throws-display.component';

describe('SavingThrowsDisplayComponent', () => {
  let component: SavingThrowsDisplayComponent;
  let fixture: ComponentFixture<SavingThrowsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingThrowsDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingThrowsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
