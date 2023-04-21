import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportgenerationComponent } from './admin-reportgeneration.component';

describe('AdminReportgenerationComponent', () => {
  let component: AdminReportgenerationComponent;
  let fixture: ComponentFixture<AdminReportgenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReportgenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
