import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactyrBannerComponent } from './charactyr-banner.component';

describe('CharactyrBannerComponent', () => {
  let component: CharactyrBannerComponent;
  let fixture: ComponentFixture<CharactyrBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactyrBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactyrBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
