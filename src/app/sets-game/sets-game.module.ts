import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetsGamePageRoutingModule } from './sets-game-routing.module';

import { SetsGamePage } from './sets-game.page';

import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetsGamePageRoutingModule,
    DragDropModule
  ],
  declarations: [SetsGamePage]
})
export class SetsGamePageModule {}
