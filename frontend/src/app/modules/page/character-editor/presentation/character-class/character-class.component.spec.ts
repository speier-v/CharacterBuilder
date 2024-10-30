import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassComponent } from './character-class.component';

describe('CharacterClassComponent', () => {
  let component: CharacterClassComponent;
  let fixture: ComponentFixture<CharacterClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterClassComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CharacterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
