import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseGamePageRoutingModule } from './choose-game-routing.module';

import { ChooseGamePage } from './choose-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseGamePageRoutingModule
  ],
  declarations: [ChooseGamePage]
})
export class ChooseGamePageModule {}
