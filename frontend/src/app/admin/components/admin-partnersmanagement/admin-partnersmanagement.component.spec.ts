import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartnersmanagementComponent } from './admin-partnersmanagement.component';

describe('AdminPartnersmanagementComponent', () => {
  let component: AdminPartnersmanagementComponent;
  let fixture: ComponentFixture<AdminPartnersmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartnersmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartnersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
