import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HdGamePage } from './hd-game.page';

const routes: Routes = [
  {
    path: '',
    component: HdGamePage
  },
  {
    path: 'hd-play',
    loadChildren: () => import('./hd-play/hd-play.module').then( m => m.HdPlayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HdGamePageRoutingModule {}
