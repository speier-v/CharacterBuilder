import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesAndSpellsComponent } from './abilities-and-spells.component';

describe('AbilitiesAndSpellsComponent', () => {
  let component: AbilitiesAndSpellsComponent;
  let fixture: ComponentFixture<AbilitiesAndSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesAndSpellsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AbilitiesAndSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
