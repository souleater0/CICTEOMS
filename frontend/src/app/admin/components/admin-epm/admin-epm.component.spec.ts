import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEpmComponent } from './admin-epm.component';

describe('AdminEpmComponent', () => {
  let component: AdminEpmComponent;
  let fixture: ComponentFixture<AdminEpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEpmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
