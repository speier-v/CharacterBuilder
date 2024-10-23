import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndSignUpComponent } from './login-and-sign-up.component';

describe('LoginPageComponent', () => {
  let component: LoginAndSignUpComponent;
  let fixture: ComponentFixture<LoginAndSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAndSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAndSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
