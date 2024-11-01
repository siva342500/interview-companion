// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-training',
//   templateUrl: './training.page.html',
//   styleUrls: ['./training.page.scss'],
// })
// export class TrainingPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage {
  selectedTechnology: string | undefined;
  selectedDate: string | undefined;
  selectedTime: string | undefined;

  constructor() {}

  submitReservation() {
    // Logic for submitting the reservation
    console.log('Reservation submitted for Training');
    console.log('Selected Technology:', this.selectedTechnology);
    console.log('Selected Date:', this.selectedDate);
    console.log('Selected Time:', this.selectedTime);
  }
}
