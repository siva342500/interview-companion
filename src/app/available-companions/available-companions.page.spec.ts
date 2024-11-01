import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailableCompanionsPage } from './available-companions.page';

describe('AvailableCompanionsPage', () => {
  let component: AvailableCompanionsPage;
  let fixture: ComponentFixture<AvailableCompanionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCompanionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
