import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { StatusBar } = Plugins;
const { Storage } = Plugins;

var chosenCharacter = "1";

@Component({
  selector: 'app-choose-character',
  templateUrl: './choose-character.page.html',
  styleUrls: ['./choose-character.page.scss'],
})
export class ChooseCharacterPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  slideOptions = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private navigation: NavController) { }

  ngOnInit() {
    StatusBar.hide();   
  }

  changeSlide() {
    this.slides.getActiveIndex().then(index => {
      if(index==0){
        this.slides.slideTo(1);
        chosenCharacter = "2"
      } else {
        this.slides.slideTo(0);
        chosenCharacter = "1"
      }
   });
  }

  openNextPage(){
    this.navigation.navigateForward('choose-game');
    this.setCharacter(chosenCharacter);
  }
  
  //@value = personagem escolhido. 1-boy, 2-girl
  async setCharacter(value) {
    await Storage.set({
      key: 'character',
      value: value
    });
  }

}
