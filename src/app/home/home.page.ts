import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { StatusBar } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navigation: NavController) {}

  ngOnInit(){
    StatusBar.hide();
  }
  openNextPage(){
    this.navigation.navigateForward('choose-character');
  }

}
