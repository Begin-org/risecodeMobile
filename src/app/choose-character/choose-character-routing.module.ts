import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCharacterPage } from './choose-character.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCharacterPageRoutingModule {}
