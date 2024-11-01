import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumePrepPage } from './resume-prep.page';

describe('ResumePrepPage', () => {
  let component: ResumePrepPage;
  let fixture: ComponentFixture<ResumePrepPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePrepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
