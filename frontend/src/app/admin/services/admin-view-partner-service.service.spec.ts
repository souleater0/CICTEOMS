import { TestBed } from '@angular/core/testing';

import { AdminViewPartnerServiceService } from './admin-view-partner-service.service';

describe('AdminViewPartnerServiceService', () => {
  let service: AdminViewPartnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminViewPartnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
