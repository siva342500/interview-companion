import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-companions',
  templateUrl: './available-companions.page.html',
  styleUrls: ['./available-companions.page.scss'],
})
export class AvailableCompanionsPage implements OnInit {
  companions: any[] = []; // To hold the list of confirmed companions

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getConfirmedCompanions();
  }

  // Fetch confirmed companions from the API
  getConfirmedCompanions() {
    this.http
      .get<any[]>('http://localhost:8000/api/confirmed-experts')
      .subscribe(
        (data) => {
          this.companions = data;
        },
        (error) => {
          console.error('Error fetching companions:', error);
        }
      );
  }

  // Method to reserve a companion
  reserveCompanion(companionId: number) {
    this.router.navigate(['/payment-method', { companionId }]);
  }
}
