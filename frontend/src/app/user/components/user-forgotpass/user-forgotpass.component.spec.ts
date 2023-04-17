import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgotpassComponent } from './user-forgotpass.component';

describe('UserForgotpassComponent', () => {
  let component: UserForgotpassComponent;
  let fixture: ComponentFixture<UserForgotpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForgotpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
