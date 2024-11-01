import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  payments: any[] = []; // Array to hold payment details
  apiUrl = 'http://localhost:8000/api/payments/confirmed'; // Update with your API URL

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getPayments(); // Fetch payment details on initialization
  }

  getPayments() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.payments = data; // Assign fetched data to payments array
      },
      (error) => {
        console.error('Error fetching payments:', error);
      }
    );
  }

  // Add a method to navigate back or to another page if necessary
  goBack() {
    this.router.navigate(['/account']); // Navigate back to account page
  }
}
