import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetsGamePage } from './sets-game.page';

const routes: Routes = [
  {
    path: '',
    component: SetsGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetsGamePageRoutingModule {}
