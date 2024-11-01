import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

interface OtpResponse {
  message: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  selectedCountryCode: string | undefined;
  mobileNumber: string | undefined;

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  sendOtp() {
    if (this.selectedCountryCode && this.mobileNumber) {
      const fullMobileNumber = `${this.selectedCountryCode}${this.mobileNumber}`;
      this.http
        .post<OtpResponse>('http://localhost:8000/api/send-otp', {
          mobileNumber: fullMobileNumber,
        })
        .subscribe(
          (response) => {
            alert(response.message); // Show success message
            // Navigate to OTP verification page
            this.navCtrl.navigateForward('/mobile-number-otp', {
              queryParams: { mobileNumber: fullMobileNumber },
            });
          },
          (error) => {
            alert('Error sending OTP: ' + error.error.message);
          }
        );
    } else {
      alert('Please select a country code and enter your mobile number.');
    }
  }

  onCountrySelected() {
    // Implement any logic needed when a country is selected (optional)
  }
}
