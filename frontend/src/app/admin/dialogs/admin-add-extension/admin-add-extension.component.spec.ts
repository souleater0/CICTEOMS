import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddExtensionComponent } from './admin-add-extension.component';

describe('AdminAddExtensionComponent', () => {
  let component: AdminAddExtensionComponent;
  let fixture: ComponentFixture<AdminAddExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
