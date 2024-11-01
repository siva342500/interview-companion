import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodingTestPageRoutingModule } from './coding-test-routing.module';

import { CodingTestPage } from './coding-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodingTestPageRoutingModule
  ],
  declarations: [CodingTestPage]
})
export class CodingTestPageModule {}
