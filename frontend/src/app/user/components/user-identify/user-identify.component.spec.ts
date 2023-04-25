import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdentifyComponent } from './user-identify.component';

describe('UserIdentifyComponent', () => {
  let component: UserIdentifyComponent;
  let fixture: ComponentFixture<UserIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIdentifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
