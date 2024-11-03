import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  openRazorpay(order_id: string, amount: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // createOrder(amount: number, receipt: string) {
  //   return this.http.post<{ orderId: string }>(`${this.apiUrl}/create-order`, {
  //     amount,
  //     receipt,
  //   });
  createOrder(amount: number, receipt: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, { amount, receipt });
  }
  storePayment(
paymentId: string, amount: number, currency: string, order_id: string  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/store-payment`, {
      payment_id: paymentId,
      amount: amount,
      currency: currency,
    });
  }
}

