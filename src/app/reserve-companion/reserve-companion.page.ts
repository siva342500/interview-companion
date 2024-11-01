// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-reserve-companion',
//   templateUrl: './reserve-companion.page.html',
//   styleUrls: ['./reserve-companion.page.scss'],
// })
// export class ReserveCompanionPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserve-companion',
  templateUrl: './reserve-companion.page.html',
  styleUrls: ['./reserve-companion.page.scss'],
})
export class ReserveCompanionPage {
  serviceType: string | null;
selectedTime: any;
selectedDate: any;

  constructor(private route: ActivatedRoute) {
    this.serviceType = this.route.snapshot.paramMap.get('serviceType');
  }

  submitReservation() {
    // Reservation logic based on serviceType (e.g., Training, Mock Interview)
    if (this.serviceType === 'training') {
      // Add logic to handle reservation for Training
    } else if (this.serviceType === 'resumePrep') {
      // Add logic for Resume Prep
    }
    // Continue for other services
  }
}
