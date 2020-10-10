import { Component, OnInit } from '@angular/core';
import {NavController } from '@ionic/angular'
@Component({
  selector: 'app-hd-play',
  templateUrl: './hd-play.page.html',
  styleUrls: ['./hd-play.page.scss'],
})
export class HdPlayPage implements OnInit {

  constructor(private navigation: NavController) { }

  ngOnInit() {
  }

  nextPage(){
    this.navigation.navigateForward('hd-game');
  }
}
