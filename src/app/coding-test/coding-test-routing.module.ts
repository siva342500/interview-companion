import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodingTestPage } from './coding-test.page';

const routes: Routes = [
  {
    path: '',
    component: CodingTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingTestPageRoutingModule {}
