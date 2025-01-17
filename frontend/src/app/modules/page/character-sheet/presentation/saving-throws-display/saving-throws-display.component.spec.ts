import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterKeyPipe } from '../stat-display/filter-key-pipe.pipe';
import { SavingThrowsDisplayComponent } from './saving-throws-display.component';

describe('SavingThrowsDisplayComponent', () => {
  let component: SavingThrowsDisplayComponent;
  let fixture: ComponentFixture<SavingThrowsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingThrowsDisplayComponent, FilterKeyPipe],
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
