import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-mobile-number-otp',
  templateUrl: './mobile-number-otp.page.html',
  styleUrls: ['./mobile-number-otp.page.scss'],
})
export class MobileNumberOtpPage {
  mobileNumber: string | undefined;
  otp: string[] = ['', '', '', ''];
  correctOtp: string = '';

  // Access all OTP input fields
  @ViewChildren('otpInput', { read: ElementRef })
  otpInputs!: QueryList<ElementRef>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.route.queryParams.subscribe((params) => {
      this.mobileNumber = params['mobileNumber'];
      this.requestOtp();
    });
  }

  goToChangeMobileNumber() {
    this.router.navigate(['/create']);
  }

  requestOtp() {
    this.http
      .post<{ otp: string }>('http://localhost:8000/api/request-otp', {
        mobileNumber: this.mobileNumber,
      })
      .subscribe(
        (response) => {
          this.correctOtp = response.otp;
          console.log('OTP sent:', this.correctOtp);
        },
        (error) => {
          console.error('Error requesting OTP:', error);
        }
      );
  }

  onOtpInput(index: number) {
    const otpInputElements = this.otpInputs.toArray();

    // Move to the next input if the current box is filled
    if (this.otp[index] && index < otpInputElements.length - 1) {
      otpInputElements[index + 1].nativeElement.focus();
    }
  }

  verifyOtp() {
    const enteredOtp = this.otp.join('');
    console.log('Entered OTP:', enteredOtp);

    this.http
      .post('http://localhost:8000/api/verify-otp', {
        mobileNumber: this.mobileNumber,
        otp: enteredOtp,
      })
      .subscribe(
        (response) => {
          console.log('OTP verified successfully!', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Invalid OTP. Please try again.');
          alert('Invalid OTP. Please try again.');
        }
      );
  }
}
