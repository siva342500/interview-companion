import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferAFriendPage } from './refer-afriend.page';

const routes: Routes = [
  {
    path: '',
    component: ReferAFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferAFriendPageRoutingModule {}
