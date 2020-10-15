import { Component, OnInit } from '@angular/core';
import {NavController, ModalController } from '@ionic/angular'
import {ModalPage} from '../../modal/modal.page'
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-hd-play',
  templateUrl: './hd-play.page.html',
  styleUrls: ['./hd-play.page.scss'],
})
export class HdPlayPage implements OnInit {

  constructor(private navigation: NavController, public modalController : ModalController) { }

  ngOnInit() {
  }

  nextPage(){
    this.navigation.navigateForward('hd-game');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "jogo": 1,
      }
    });
    return await modal.present();
  }
  
}
