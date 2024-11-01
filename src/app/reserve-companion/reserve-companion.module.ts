import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveCompanionPageRoutingModule } from './reserve-companion-routing.module';

import { ReserveCompanionPage } from './reserve-companion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveCompanionPageRoutingModule
  ],
  declarations: [ReserveCompanionPage]
})
export class ReserveCompanionPageModule {}
