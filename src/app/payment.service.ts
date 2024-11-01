import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:8000/api'; // Update to your API base URL

  constructor(private http: HttpClient) {}

  createOrder(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, { amount });
  }
}
