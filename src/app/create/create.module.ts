// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { CreatePageRoutingModule } from './create-routing.module';

// import { CreatePage } from './create.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     CreatePageRoutingModule
//   ],
//   declarations: [CreatePage]
// })
// export class CreatePageModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatePageRoutingModule } from './create-routing.module';
import { CreatePage } from './create.page'; // Ensure the import is correct

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CreatePageRoutingModule],
  declarations: [CreatePage], // Ensure CreatePage is declared here
})
export class CreatePageModule {}
