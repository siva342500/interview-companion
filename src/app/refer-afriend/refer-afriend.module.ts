import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferAFriendPageRoutingModule } from './refer-afriend-routing.module';

import { ReferAFriendPage } from './refer-afriend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferAFriendPageRoutingModule
  ],
  declarations: [ReferAFriendPage]
})
export class ReferAFriendPageModule {}
