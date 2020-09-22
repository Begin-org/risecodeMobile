import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCharacterPageRoutingModule } from './choose-character-routing.module';

import { ChooseCharacterPage } from './choose-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCharacterPageRoutingModule
  ],
  declarations: [ChooseCharacterPage]
})
export class ChooseCharacterPageModule {}
