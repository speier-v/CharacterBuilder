import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCharacterModalComponent } from './copy-character-modal.component';

describe('CopyCharacterModalComponent', () => {
  let component: CopyCharacterModalComponent;
  let fixture: ComponentFixture<CopyCharacterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyCharacterModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyCharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
