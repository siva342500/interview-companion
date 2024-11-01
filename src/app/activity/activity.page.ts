import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage {
  // Sample data for reservations
  activeReservations = [
    { type: 'Training', date: '10/11/2024', time: '10:00 AM' },
    { type: 'Mock Interview', date: '10/12/2024', time: '02:00 PM' },
  ];

  reservationHistory = [
    { type: 'Coding Test', date: '09/20/2024', time: '11:00 AM' },
    { type: 'Resume Prep', date: '09/25/2024', time: '01:00 PM' },
  ];
  constructor(private navCtrl: NavController, private router: Router) {}
  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  goToNotifications() {
    this.navCtrl.navigateForward('/notifications');
  }

  goToActivity() {
    this.navCtrl.navigateForward('/activity');
  }

  goToAccount() {
    this.navCtrl.navigateForward('/account');
  }
}
