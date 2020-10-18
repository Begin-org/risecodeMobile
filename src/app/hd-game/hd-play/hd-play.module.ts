import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HdPlayPageRoutingModule } from './hd-play-routing.module';

import { HdPlayPage } from './hd-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HdPlayPageRoutingModule
  ],
  declarations: [HdPlayPage]
})
export class HdPlayPageModule {}
