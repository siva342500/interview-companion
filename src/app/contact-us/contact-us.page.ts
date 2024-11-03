import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage {
  constructor() {}

  submitContactForm(
    subject: string | number | null | undefined,
    message: string | number | null | undefined
  ) {
    const phoneNumber = '7997116117';

    // Ensure subject and message are strings
    const formattedSubject = subject ? String(subject) : '';
    const formattedMessage = message ? String(message) : '';

    const combinedMessage = encodeURIComponent(
      `${formattedSubject}: ${formattedMessage}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${combinedMessage}`;

    // Open the WhatsApp URL
    window.open(whatsappUrl, '_blank');
  }
}
