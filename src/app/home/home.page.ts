import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { StatusBar } = Plugins;
const { Storage } = Plugins;

var chooseCharacter = false;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navigation: NavController) {}

  ngOnInit(){
    StatusBar.hide();
    //this.getItem();
  }
  openNextPage(){
    if(chooseCharacter==false){
      this.navigation.navigateForward('choose-character');
    } else {
      this.navigation.navigateForward('choose-game');
    }
    
  }
  
  async getItem() {
    const { value } = await Storage.get({ key: 'character' });
    if(value==null){
      chooseCharacter = false;
    } else {
      chooseCharacter = true;
    }
  }

}
