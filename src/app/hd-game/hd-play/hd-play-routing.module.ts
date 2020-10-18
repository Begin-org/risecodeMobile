import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HdPlayPage } from './hd-play.page';

const routes: Routes = [
  {
    path: '',
    component: HdPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HdPlayPageRoutingModule {}
