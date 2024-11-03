import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  token: string | null = null; // Store the token here

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  ngOnInit() {
    this.getToken(); // Retrieve the token when the component initializes
  }

  sendOtp() {
    if (this.selectedCountryCode && this.mobileNumber) {
      const fullMobileNumber = `${this.selectedCountryCode}${this.mobileNumber}`;
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`, // Include the token in the headers
      });

      this.http
        .post<OtpResponse>(
          'http://localhost:8000/api/send-otp',
          {
            mobileNumber: fullMobileNumber,
          },
          { headers }
        ) // Pass the headers in the request
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

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token); // Save to local storage
  }

  getToken() {
    this.token = localStorage.getItem('auth_token'); // Retrieve from local storage
  }

  onCountrySelected() {
    // Implement any logic needed when a country is selected (optional)
  }
}
