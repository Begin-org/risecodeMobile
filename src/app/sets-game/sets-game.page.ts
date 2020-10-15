import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import {ModalPage} from '../modal/modal.page'
import {
  Plugins
} from '@capacitor/core';
const { Storage } = Plugins;

var choosenCharacter;

@Component({
  selector: 'app-sets-game',
  templateUrl: './sets-game.page.html',
  styleUrls: ['./sets-game.page.scss'],
})
export class SetsGamePage implements OnInit {
  isGameVisible = false;
  isWarningsVisible = true;
  isWonVisible = false;
  isLostVisible = false;
  isListsVisible = false;
  isPlayVisible = true;
  srcLost = "./assets/lostBoy.png";
  srcWin = "./assets/wonBoy.png"

  constructor(private navigation: NavController, public modalController : ModalController) { }

  ngOnInit() {
    this.getItem();
  }

  async getItem() {
    const { value } = await Storage.get({ key: 'character' });
    choosenCharacter = value;

    if(choosenCharacter==1){
      this.srcLost = "./assets/lostBoy.png";
      this.srcWin = "./assets/wonBoy.png"
    } else {
      this.srcLost = "./assets/lostGirl.png";
      this.srcWin = "./assets/wonGirl.png"
    }
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "jogo": 2,
      }
    });
    return await modal.present();
  }
  reset(){
    this.isGameVisible = false;
    this.isLostVisible = false;
    this.isListsVisible = false;
    this.isWarningsVisible = false;
    this.isWonVisible = false;
    this.isPlayVisible = false;
  }

  finish() {
    /* começo A = A.left 
    fim A = B.left
    comeco B = A.left+A.width
    fim B = B.left + B.width
    comeco juncao = B.left
    fim juncao = A.left + A.width
    -----------------------
    placa mae = sem numero
    mouse = 2
    teclado = 3
    disco rigido = 4*/

    this.reset();
    this.isWarningsVisible = true;
    

    let circle = document.getElementById("circle");
    let circle2 = document.getElementById("circle2");
    let item = document.getElementById("item");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("item4");

    if((item.getBoundingClientRect().left > circle.getBoundingClientRect().left 
    && item.getBoundingClientRect().left < circle2.getBoundingClientRect().left) 
    && (item.getBoundingClientRect().top > circle.getBoundingClientRect().top) 
    && (item.getBoundingClientRect().top < (circle.getBoundingClientRect().top + circle.offsetHeight))
    && (item4.getBoundingClientRect().left > circle.getBoundingClientRect().left 
    && item4.getBoundingClientRect().left < circle2.getBoundingClientRect().left) 
    && (item4.getBoundingClientRect().top > circle.getBoundingClientRect().top) 
    && (item4.getBoundingClientRect().top < (circle.getBoundingClientRect().top + circle.offsetHeight))
    && ((item2.getBoundingClientRect().left 
    && item2.getBoundingClientRect().left < (circle.getBoundingClientRect().left + circle.offsetWidth)) 
    && (item2.getBoundingClientRect().top > circle.getBoundingClientRect().top) 
    && (item2.getBoundingClientRect().top < (circle.getBoundingClientRect().top + circle.offsetHeight)))
    && ((item3.getBoundingClientRect().left > (circle.getBoundingClientRect().left + circle.offsetWidth) 
    && item3.getBoundingClientRect().left < (circle2.getBoundingClientRect().left + circle2.offsetWidth)) 
    && (item3.getBoundingClientRect().top > circle2.getBoundingClientRect().top) 
    && (item3.getBoundingClientRect().top < (circle2.getBoundingClientRect().top +circle2.offsetHeight)))){
      this.isWonVisible = true;

    }else{
      this.isLostVisible = true;
  
    }

    

  }

  play(){
      this.reset();
      this.isListsVisible = true;
      this.isGameVisible = true;
  }

  won(){
    this.navigation.back();
  }

}
