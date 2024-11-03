import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {
  interviewDate: string = '';
  interviewTime: string = '';
  time_zone: string = '';
  selectedTechnology: string = '';
  technologies: string[] = [];
  acceptedCompanions: any[] = []; // Store expert details
  expertsAcceptedIds: number[] = []; // Store unique expert IDs to be submitted
  statusMessage: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSkills();
  }

  fetchSkills() {
    this.http.get<any[]>('http://localhost:8000/api/skills').subscribe(
      (response) => {
        this.technologies = response.map((skill) => skill.name);
      },
      (error) => {
        console.error('Error fetching skills:', error);
      }
    );
  }

  fetchExperts() {
    if (this.selectedTechnology) {
      this.http
        .get<any>(
          `http://localhost:8000/api/skills?name=${this.selectedTechnology}`
        )
        .subscribe(
          (skillResponse) => {
            const skillId = skillResponse[0]?.id; // Assuming skill ID is present
            if (skillId) {
              this.http
                .get<any>(
                  `http://localhost:8000/api/expert-skills?skill_id=${skillId}`
                )
                .subscribe(
                  (expertSkillResponse) => {
                    const expertIds = expertSkillResponse.map(
                      (expertSkill: { expert_id: any }) => expertSkill.expert_id
                    ); // Map to get expert IDs

                    // Fetch details for unique expert IDs
                    this.fetchExpertsDetails(expertIds);
                  },
                  (error) => {
                    console.error('Error fetching expert skills:', error);
                  }
                );
            }
          },
          (error) => {
            console.error('Error fetching skill ID:', error);
          }
        );
    }
  }

  // fetchExpertsDetails(expertIds: any[]) {
  //   if (expertIds.length > 0) {
  //     // Use Set to filter out duplicate expert IDs
  //     const uniqueExpertIds = Array.from(new Set(expertIds));

  //     this.http
  //       .get<any>(
  //         `http://localhost:8000/api/experts?ids=${uniqueExpertIds.join(',')}`
  //       )
  //       .subscribe(
  //         (response) => {
  //           this.acceptedCompanions = response.experts;

  //           // Store unique expert IDs for submission
  //           this.expertsAcceptedIds = this.acceptedCompanions.map(
  //             (expert) => expert.id
  //           );

  //           // Send notifications after fetching expert details
  //           this.sendNotifications(this.acceptedCompanions);
  //         },
  //         (error) => {
  //           console.error('Error fetching experts:', error);
  //         }
  //       );
  //   } else {
  //     this.statusMessage = 'No experts found for the selected technology.';
  //   }
  // }
  fetchExpertsDetails(expertIds: any[]) {
    if (expertIds.length > 0) {
      const uniqueExpertIds = Array.from(new Set(expertIds));

      this.http
        .get<any>(
          `http://localhost:8000/api/experts?ids=${uniqueExpertIds.join(',')}`
        )
        .subscribe(
          (response) => {
            this.acceptedCompanions = response.experts;

            // Store unique expert IDs for submission
            this.expertsAcceptedIds = this.acceptedCompanions.map(
              (expert) => expert.id
            );

            // Send notifications after fetching expert details
            this.sendNotifications(this.acceptedCompanions);
          },
          (error) => {
            console.error('Error fetching experts:', error);
          }
        );
    } else {
      this.statusMessage = 'No experts found for the selected technology.';
    }
  }

  sendNotifications(experts: any[]) {
    const interviewDetails = {
      date: this.interviewDate,
      time: this.interviewTime,
      time_Zone: this.time_zone,
      tech_requirements: this.selectedTechnology,
    };

    const expertEmails = experts.map((expert) => expert.email); // Assuming experts have an email field

    this.http
      .post('http://localhost:8000/api/send-notifications', {
        experts: expertEmails, // Sending only email addresses
        interviewDetails,
      })
      .subscribe(
        (response) => {
          this.statusMessage = 'Notification sent to matching experts';
          this.router.navigate(['/available-companions']);
        },
        (error) => {
          console.error('Error sending notifications:', error);
        }
      );
  }

  submitRequest() {
    // Ensure you have selected a technology before proceeding
    if (
      !this.selectedTechnology ||
      !this.interviewDate ||
      !this.interviewTime ||
      !this.time_zone
    ) {
      this.statusMessage = 'Please fill in all required fields.';
      return;
    }

    // Log the expert IDs before submission
    console.log(
      'Experts Accepted IDs before submission:',
      this.expertsAcceptedIds
    );

    // Create the interview request
    const requestData = {
      tech_requirements: this.selectedTechnology,
      date: this.interviewDate,
      time: this.interviewTime,
      time_zone: this.time_zone,
      experts_accepted: [1], // Convert to comma-separated string
      student_id: 1, // Default student ID
    };

    console.log('Submitting interview request:', requestData); // Debugging statement

    this.http
      .post<any>('http://localhost:8000/api/interviews/create', requestData)
      .subscribe(
        (response) => {
          this.statusMessage = 'Interview request created successfully';
            this.router.navigate(['/available-companions']);
        },
        (error) => {
          console.error('Error submitting request:', error);
          this.statusMessage = 'Failed to create interview.';
        }
      );
  }
}
