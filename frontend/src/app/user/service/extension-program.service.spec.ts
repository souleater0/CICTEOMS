import { TestBed } from '@angular/core/testing';

import { ExtensionProgramService } from './extension-program.service';

describe('ExtensionProgramService', () => {
  let service: ExtensionProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtensionProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
