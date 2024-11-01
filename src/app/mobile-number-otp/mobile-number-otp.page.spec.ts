import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileNumberOtpPage } from './mobile-number-otp.page';

describe('MobileNumberOtpPage', () => {
  let component: MobileNumberOtpPage;
  let fixture: ComponentFixture<MobileNumberOtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNumberOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
