// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { CreatePage } from './create.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: CreatePage
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class CreatePageRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage } from './create.page'; // This should match your component name

const routes: Routes = [
  {
    path: '',
    component: CreatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}
