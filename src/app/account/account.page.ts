import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  showPayment: any;
  showRefer: any;
  showContact: any;
  showProfile: any;
  confirmLogout() {
    throw new Error('Method not implemented.');
  }
  showLegal: any;
  constructor(private navCtrl: NavController, private router: Router) {}
  logout() {
    this.router.navigate(['/home']);
  }
  referFriend() {
    throw new Error('Method not implemented.');
  }
  updateProfile() {
    throw new Error('Method not implemented.');
  }
  candidateName: string = 'John Doe'; // Replace with actual candidate name
  email: string = 'john.doe@example.com'; // Replace with actual email
  phoneNumber: string = '123-456-7890'; // Replace with actual phone number
  paymentMethod: string = 'Credit Card'; // Example payment method
  referFriendMessage: string = ''; // To capture the refer-a-friend input

  // submitContactForm(subject: string | null, message: string | null) {
  //   // Logic to trigger email and WhatsApp message
  //   console.log('Subject:', subject);
  //   console.log('Message:', message);
  //   // Implement email sending and WhatsApp messaging logic here
  // }
  submitContactForm(subject: string | undefined, message: string | undefined) {
    if (subject && message) {
      // Logic to trigger email and WhatsApp message
      console.log('Subject:', subject);
      console.log('Message:', message);
      // Implement email sending and WhatsApp messaging logic here
    } else {
      // Handle the case when subject or message is not provided
      console.error('Subject and message are required.');
    }
  }

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

  goToBankAccountDetails() {
    this.navCtrl.navigateForward('/bank-account-details');
  }
  goToHome() {
    this.navCtrl.navigateForward('/home');
  }
}
