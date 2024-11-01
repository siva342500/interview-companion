import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileNumberOtpPage } from './mobile-number-otp.page';

const routes: Routes = [
  {
    path: '',
    component: MobileNumberOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileNumberOtpPageRoutingModule {}
