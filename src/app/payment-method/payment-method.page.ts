import { Component } from '@angular/core';
import { PaymentService } from './payment-method.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage {
  amount: number = 1; // Example amount in INR

  constructor(private paymentService: PaymentService) {}

  makePayment() {
    const receipt = `receipt_${new Date().getTime()}`;

    // Step 1: Create an order on the backend
    this.paymentService.createOrder(this.amount, receipt).subscribe(
      (response: { order_id: string }) => {
        const options = {
          key: 'rzp_test_c0ALHfuoiS0luD', // Razorpay test key
          amount: this.amount * 100, // Amount in paise
          currency: 'INR',
          name: 'Your Company',
          description: 'Test Payment',
          order_id: response.order_id, // Use the backend-provided order ID
          handler: (res: any) => {
            // Step 2: Call backend to store payment details after successful payment
            this.paymentService
              .storePayment(res.razorpay_payment_id, this.amount, 'INR', response.order_id)
              .subscribe(
                (storeResponse) => {
                  alert('Payment details stored successfully.');
                },
                (storeError) => {
                  console.error('Error storing payment details:', storeError);
                  alert('Failed to store payment details.');
                }
              );
          },
          prefill: {
            name: 'John Doe', // Example name
            email: 'john.doe@example.com', // Example email
            contact: '9999999999', // Example contact number
          },
          notes: {
            address: 'Some address', // Optional note
          },
          theme: {
            color: '#F37254', // Razorpay form color
          },
        };

        const rzp = new Razorpay(options);
        rzp.on('payment.failed', (response: any) => {
          alert('Payment failed. Please try again.');
          console.error('Payment failed:', response);
        });

        // Step 3: Open the Razorpay form
        rzp.open();
      },
      (error: any) => {
        console.error('Error creating Razorpay order:', error);
        alert('Failed to initiate payment');
      }
    );
  }
}
