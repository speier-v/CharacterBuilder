import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameAndLogoutComponent } from './username-and-logout.component';

describe('UsernameAndLogoutComponent', () => {
  let component: UsernameAndLogoutComponent;
  let fixture: ComponentFixture<UsernameAndLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameAndLogoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameAndLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
