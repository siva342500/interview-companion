import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showSplash = true; // Controls the visibility of the splash screen

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Hide the splash screen and navigate to the main page after 3 seconds
    setTimeout(() => {
      this.showSplash = false;
      this.navCtrl.navigateForward('/main');
    }, 3000); // 3 seconds = duration of animation
  }
}
