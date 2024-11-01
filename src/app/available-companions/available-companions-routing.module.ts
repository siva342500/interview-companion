import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableCompanionsPage } from './available-companions.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableCompanionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableCompanionsPageRoutingModule {}
