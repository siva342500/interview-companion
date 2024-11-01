import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage {
  balance: number = 100.0; // Example balance

  constructor() {}

  addFunds() {
    // Implement logic to add funds (e.g., show a modal or navigate to another page)
    console.log('Add funds functionality');
  }

  withdrawFunds() {
    // Implement logic to withdraw funds (e.g., show a modal or navigate to another page)
    console.log('Withdraw funds functionality');
  }
}
