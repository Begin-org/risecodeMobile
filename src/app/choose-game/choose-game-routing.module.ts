import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseGamePage } from './choose-game.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseGamePageRoutingModule {}
