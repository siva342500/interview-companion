import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodingTestPage } from './coding-test.page';

describe('CodingTestPage', () => {
  let component: CodingTestPage;
  let fixture: ComponentFixture<CodingTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
