import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HdGamePageRoutingModule } from './hd-game-routing.module';

import { HdGamePage } from './hd-game.page';

import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HdGamePageRoutingModule,
    DragDropModule
  ],
  declarations: [HdGamePage]
})
export class HdGamePageModule {}
