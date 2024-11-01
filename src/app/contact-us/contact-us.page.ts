import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  submitContactForm(arg0: string | number, arg1: string) {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit() {}
}
