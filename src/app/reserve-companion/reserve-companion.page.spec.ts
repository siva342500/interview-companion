import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserveCompanionPage } from './reserve-companion.page';

describe('ReserveCompanionPage', () => {
  let component: ReserveCompanionPage;
  let fixture: ComponentFixture<ReserveCompanionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCompanionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
