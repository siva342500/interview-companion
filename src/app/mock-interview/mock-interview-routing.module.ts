import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockInterviewPage } from './mock-interview.page';

const routes: Routes = [
  {
    path: '',
    component: MockInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MockInterviewPageRoutingModule {}
