import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  constructor(private navCtrl: NavController) {}

  navigateToAnotherPage() {
    this.navCtrl.navigateForward('/create');
  }
}
