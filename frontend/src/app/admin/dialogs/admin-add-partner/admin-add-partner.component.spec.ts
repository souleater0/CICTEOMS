import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPartnerComponent } from './admin-add-partner.component';

describe('AdminAddPartnerComponent', () => {
  let component: AdminAddPartnerComponent;
  let fixture: ComponentFixture<AdminAddPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
