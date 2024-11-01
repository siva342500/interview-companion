import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

interface Request {
  title: string;
  date: string;
  accepted: boolean | null; // Use null to represent no response
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage {
  requests: Request[] = [
    { title: 'Interview', date: 'Oct 16, 2024', accepted: true },
    { title: 'Interview', date: 'Oct 15, 2024', accepted: false },
    { title: 'Interview', date: 'Oct 12, 2024', accepted: null },
    { title: 'Interview', date: 'Oct 10, 2024', accepted: true },
  ];

  constructor(private navCtrl: NavController, private router: Router) {}

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
  goToActivity() {
    this.navCtrl.navigateForward('/activity');
  }
  goToAccount() {
    this.navCtrl.navigateForward('/account');
  }
  goToNotifications() {
    this.navCtrl.navigateForward('/notifications');
  }

  // Optional: Function to handle request click
  viewRequestDetails(request: Request) {
    console.log('Viewing request details:', request);
    // You can navigate to a details page or show a modal here
  }
}
