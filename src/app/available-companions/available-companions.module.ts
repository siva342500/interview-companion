import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableCompanionsPageRoutingModule } from './available-companions-routing.module';

import { AvailableCompanionsPage } from './available-companions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableCompanionsPageRoutingModule
  ],
  declarations: [AvailableCompanionsPage]
})
export class AvailableCompanionsPageModule {}
