import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { InterviewPageRoutingModule } from './interview-routing.module';

import { InterviewPage } from './interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterviewPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [InterviewPage],
})
export class InterviewPageModule {}
