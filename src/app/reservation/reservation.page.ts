import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage {
  interviewDate: string = '';
  interviewTime: string = '';
  timeZone: string = '';
  companions = ['Companion A', 'Companion B', 'Companion C'];
  reservedCompanion: string | null = null;
  statusMessage: string = '';
  paymentMethod: string = '';

  constructor(private navCtrl: NavController) {}

  reserve(companion: string) {
    if (this.interviewDate && this.interviewTime && this.timeZone) {
      this.reservedCompanion = companion;
      this.statusMessage = `Reserved ${companion} for ${this.interviewDate} at ${this.interviewTime} (${this.timeZone}). Pending Acceptance...`;
    } else {
      alert('Please select date, time, and time zone before reserving.');
    }
  }

  makePayment() {
    alert(`Payment process initiated. Total: $100 using ${this.paymentMethod}`);
    // Implement actual payment logic here
  }

  navigateToPayment() {
    this.navCtrl.navigateForward('/payment'); // Assuming you have a payment page
  }
}
