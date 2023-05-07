import { TestBed } from '@angular/core/testing';

import { AdminExtensionService } from './admin-extension.service';

describe('AdminExtensionService', () => {
  let service: AdminExtensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminExtensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
