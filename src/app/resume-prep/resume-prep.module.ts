import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumePrepPageRoutingModule } from './resume-prep-routing.module';

import { ResumePrepPage } from './resume-prep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumePrepPageRoutingModule
  ],
  declarations: [ResumePrepPage]
})
export class ResumePrepPageModule {}
