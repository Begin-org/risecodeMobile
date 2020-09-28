import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar } = Plugins;
const { Storage } = Plugins;

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.page.html',
  styleUrls: ['./choose-game.page.scss'],
})
export class ChooseGamePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  slideOptions = {
    initialSlide: 0,
    speed: 400
  };

  changeSlide() {
    this.slides.getActiveIndex().then(index => {
      if(index==0){
        document.getElementById('titleGame').innerHTML = "2. CONJUNTOS"
        this.slides.slideTo(1);
      } else {
        document.getElementById('titleGame').innerHTML = "1. PEGA HDs"
        this.slides.slideTo(0);
      }
   });
  }
  constructor(private navigation: NavController) { }
  chosenCharacter = "";

  ngOnInit() {
    StatusBar.hide();
    this.getItem();
  }

  async getItem() {
    const { value } = await Storage.get({ key: 'character' });
    console.log('Chosen character: ', value);
    this.chosenCharacter = value;
  }

  openGame(){
    this.slides.getActiveIndex().then(index => {
      if(index==1){
        this.navigation.navigateForward('sets-game');
      }
    });
  }

}
