import { TestBed } from '@angular/core/testing';

import { CharacterGenServiceService } from './character-gen.service';

describe('CharacterGenServiceService', () => {
  let service: CharacterGenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterGenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
