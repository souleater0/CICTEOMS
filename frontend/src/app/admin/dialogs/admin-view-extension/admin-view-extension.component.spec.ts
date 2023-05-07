import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewExtensionComponent } from './admin-view-extension.component';

describe('AdminViewExtensionComponent', () => {
  let component: AdminViewExtensionComponent;
  let fixture: ComponentFixture<AdminViewExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
