import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview.page.html',
  styleUrls: ['./mock-interview.page.scss'],
})
export class MockInterviewPage implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}

  services = [
    {
      title: 'Training',
      price: '$125',
      image: 'assets/training.jpg',
      route: 'training',
    },
    {
      title: 'Resume Prep',
      price: '$25',
      image: 'assets/resume.jpg',
      route: 'resumePrep',
    },
    {
      title: 'Mock Interview',
      price: '$25',
      image: 'assets/moc-interview.jpg',
      route: 'mockInterview',
    },
    {
      title: 'Interview',
      price: '$100',
      image: 'assets/interview.jpg',
      route: 'interview',
    },
    {
      title: 'Coding Test',
      price: '$100',
      image: 'assets/codetest.png',
      route: 'codingTest',
    },
  ];
  navigateTo(service: string) {
    // Logic to navigate to different pages based on the service selected
    if (service === 'training') {
      this.navCtrl.navigateForward('/training');
    } else if (service === 'resumePrep') {
      this.navCtrl.navigateForward('/resume-prep');
    } else if (service === 'mockInterview') {
      this.navCtrl.navigateForward('/mock-interview');
    } else if (service === 'interview') {
      this.navCtrl.navigateForward('/interview');
    } else if (service === 'codingTest') {
      this.navCtrl.navigateForward('/coding-test');
    }
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
  goToInterview() {
    this.navCtrl.navigateForward('/interview');
  }

  ngOnInit() {}
}
