import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileNumberOtpPageRoutingModule } from './mobile-number-otp-routing.module';

import { MobileNumberOtpPage } from './mobile-number-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileNumberOtpPageRoutingModule
  ],
  declarations: [MobileNumberOtpPage]
})
export class MobileNumberOtpPageModule {}
