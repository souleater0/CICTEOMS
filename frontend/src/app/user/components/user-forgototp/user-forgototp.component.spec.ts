import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgototpComponent } from './user-forgototp.component';

describe('UserForgototpComponent', () => {
  let component: UserForgototpComponent;
  let fixture: ComponentFixture<UserForgototpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForgototpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForgototpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
