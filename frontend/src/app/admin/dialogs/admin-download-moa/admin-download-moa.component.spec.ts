import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDownloadMoaComponent } from './admin-download-moa.component';

describe('AdminDownloadMoaComponent', () => {
  let component: AdminDownloadMoaComponent;
  let fixture: ComponentFixture<AdminDownloadMoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDownloadMoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDownloadMoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
