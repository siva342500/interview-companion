import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  candidateName: string = '';
  email: string = '';
  phoneNumber: string = '';
  isSubmitted: boolean = false; // Track if the form has been submitted
  emailError: string | null = null; // Store email error message
  phoneError: string | null = null; // Store phone error message

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  register() {
    this.isSubmitted = true; // Set to true when attempting to register

    // Reset error messages
    this.emailError = null;
    this.phoneError = null;

    // Perform basic validation
    if (!this.candidateName || !this.isValidEmail(this.email) || !this.phoneNumber) {
      return; // Exit if validation fails
    }

    const studentData = {
      name: this.candidateName,
      email: this.email,
      phone: this.phoneNumber,
    };

    this.http
      .post('${environment.apiUrl}/students/create', studentData)
      .subscribe(
        async (response: any) => {
          console.log('Student registered successfully', response);
          await this.showSuccessAlert();
          this.router.navigate(['/login']);
        },
        async (error: any) => {
          console.error('Error registering student', error);

          // Check for validation errors and set the messages accordingly
          if (error.error.email) {
            this.emailError = error.error.email[0]; // Assuming the response structure
          }
          if (error.error.phone) {
            this.phoneError = error.error.phone[0]; // Assuming the response structure
          }

          await this.showErrorAlert();
        }
      );
  }

  // Email validation method
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple email regex
    return emailPattern.test(email);
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Registration successful! Please log in.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Registration failed. Please check the form for errors.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
