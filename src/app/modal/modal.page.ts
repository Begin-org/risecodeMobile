import { Component, OnInit, Input} from '@angular/core';
import {NavController, ModalController, NavParams } from '@ionic/angular'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  numberGame: number;

  isModalGame1Visible = false;
  isModalGame2Visible = false;
  constructor(public modalController : ModalController, private navParams: NavParams) { }

  
  ngOnInit() {
    this.numberGame = this.navParams.data.jogo;
    if(this.numberGame==1){
      this.isModalGame1Visible = true;
    } else if(this.numberGame==2){
      this.isModalGame2Visible = true;
    }
    
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  

}
