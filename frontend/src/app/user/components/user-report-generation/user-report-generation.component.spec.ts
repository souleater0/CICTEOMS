import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReportGenerationComponent } from './user-report-generation.component';

describe('UserReportGenerationComponent', () => {
  let component: UserReportGenerationComponent;
  let fixture: ComponentFixture<UserReportGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReportGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReportGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
