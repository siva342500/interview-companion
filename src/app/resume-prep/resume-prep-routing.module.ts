import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumePrepPage } from './resume-prep.page';

const routes: Routes = [
  {
    path: '',
    component: ResumePrepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumePrepPageRoutingModule {}
