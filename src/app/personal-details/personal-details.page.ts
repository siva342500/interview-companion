import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {
  candidateName: string = '';
  email: string = '';
  phoneNumber: string = '';
  studentId: number = 1; // Set student ID to 1 as required
  emailError: string | null = null; // Store email error message
  phoneError: string | null = null; // Store phone error message

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Load student data with ID 1
    this.loadStudentData(this.studentId);
  }

  // Load student data from the API
  loadStudentData(id: number) {
    this.http.get(`http://localhost:8000/api/students/${id}`).subscribe(
      (student: any) => {
        // Check if the student data is retrieved successfully
        if (student) {
          this.candidateName = student.name;
          this.email = student.email;
          this.phoneNumber = student.phone;
        }
      },
      (error) => {
        console.error('Error fetching student data', error);
      }
    );
  }

  // Function to update student details
  updateProfile() {
    const updatedData = {
      name: this.candidateName,
      email: this.email,
      phone: this.phoneNumber,
    };

    this.http
      .put(`http://dev.ic.com/students/${this.studentId}`, updatedData)
      .subscribe(
        async (response) => {
          console.log('Student updated successfully', response);
          // Reset error messages on successful update
          this.emailError = null;
          this.phoneError = null;
          // Show success alert
          await this.showSuccessAlert();
        },
        (error) => {
          console.error('Error updating student', error);
          // Check for validation errors and set the messages accordingly
          if (error.error.email) {
            this.emailError = error.error.email[0]; // Assuming the response structure
          } else if (error.error.phone) {
            this.phoneError = error.error.phone[0]; // Assuming the response structure
          }
        }
      );
  }

  // Function to show success alert
  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your personal details have been updated successfully.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
