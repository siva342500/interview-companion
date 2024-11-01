import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MockInterviewPageRoutingModule } from './mock-interview-routing.module';

import { MockInterviewPage } from './mock-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MockInterviewPageRoutingModule
  ],
  declarations: [MockInterviewPage]
})
export class MockInterviewPageModule {}
