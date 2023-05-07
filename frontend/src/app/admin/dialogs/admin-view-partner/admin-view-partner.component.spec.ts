import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPartnerComponent } from './admin-view-partner.component';

describe('AdminViewPartnerComponent', () => {
  let component: AdminViewPartnerComponent;
  let fixture: ComponentFixture<AdminViewPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
