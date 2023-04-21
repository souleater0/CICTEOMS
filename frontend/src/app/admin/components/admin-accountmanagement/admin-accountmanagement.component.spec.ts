import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountmanagementComponent } from './admin-accountmanagement.component';

describe('AdminAccountmanagementComponent', () => {
  let component: AdminAccountmanagementComponent;
  let fixture: ComponentFixture<AdminAccountmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
