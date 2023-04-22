import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAssignedProgramComponent } from './user-view-assigned-program.component';

describe('UserViewAssignedProgramComponent', () => {
  let component: UserViewAssignedProgramComponent;
  let fixture: ComponentFixture<UserViewAssignedProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAssignedProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewAssignedProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
