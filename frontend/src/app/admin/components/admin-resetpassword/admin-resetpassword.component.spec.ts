import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResetpasswordComponent } from './admin-resetpassword.component';

describe('AdminResetpasswordComponent', () => {
  let component: AdminResetpasswordComponent;
  let fixture: ComponentFixture<AdminResetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
