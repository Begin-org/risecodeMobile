import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { NavController, AlertController, NavParams, IonRefresher } from '@ionic/angular';
import {
  Plugins
} from '@capacitor/core';
const { Storage } = Plugins;


let marginCP = -5;
let marginWr = -5, marginUsb = -5, marginHd = -5;
let heightFrame = 0, widthFrame = 0;

//a marginTop da cesta eh de 70vh. Para descobrir o y, eh soh pegar a altura e dividir por 100 (medida por vh) e multiplicar pela margin
let yBasket = 0, xBasket = 0;
let widthBasket = 0, heightBasket = 0;

let score = 0;
let errors = 0;

var choosenCharacter;

@Component({
  selector: 'app-hd-game',
  templateUrl: './hd-game.page.html',
  styleUrls: ['./hd-game.page.scss'],
})

export class HdGamePage {

  constructor(private navigation: NavController) {

  }


  ionViewWillEnter() {
    errors = 0;
    score = 0;
    marginCP = -5;
    marginWr = -5;
    marginUsb = -5;
    marginHd = -5;
    this.getItem();
    this.carregar();

  }

  ionViewDidLeave() {
    document.location.reload();
  }

  async getItem() {
    const { value } = await Storage.get({ key: 'character' });
    choosenCharacter = value;

    if (choosenCharacter == 1) {
      document.getElementById("won").setAttribute('src', './assets/wonBoy.png')
      document.getElementById("lost").setAttribute('src', './assets/lostBoy.png')
    } else {
      document.getElementById("won").setAttribute('src', './assets/wonGirl.png')
      document.getElementById("lost").setAttribute('src', './assets/lostGirl.png')
    }
  }

  carregar() {

    heightFrame = document.getElementById("game").offsetHeight;
    widthFrame = document.getElementById("game").offsetWidth;

    //a marginTop da cesta eh de 80vh. Para descobrir o y, eh soh pegar a altura e dividir por 100 (medida por vh) e multiplicar pela margin
    xBasket = 0;
    yBasket = (heightFrame / 100) * 80;
    widthBasket = document.getElementById("basket").getBoundingClientRect().width;
    heightBasket = document.getElementById("basket").getBoundingClientRect().height;

    var cp = document.getElementById("cp");
    var wr = document.getElementById("wr");
    var usb = document.getElementById("usb");
    var hd = document.getElementById("hd");

    if (marginCP == -5) {
      cp.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
    }
    cp.style.marginTop = marginCP + "vh";

    if (marginWr == -5) {
      wr.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
    }
    wr.style.marginTop = marginWr + "vh";

    if (marginUsb == -5) {
      usb.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
    }
    usb.style.marginTop = marginUsb + "vh";

    if (marginHd == -5) {
      hd.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
    }
    hd.style.marginTop = marginHd + "vh";

    document.getElementById("pts").innerHTML = score + "/10";

    var loop = setInterval(function () {

      //chip
      if (marginCP == -5) {
        cp.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
      }
      cp.style.marginTop = marginCP + "vh";
      marginCP += 1;

      //wireless router
      if (marginWr == -5) {
        wr.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
      }
      wr.style.marginTop = marginWr + "vh";
      marginWr += 1;

      //usb
      if (marginUsb == -5) {
        usb.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
      }
      usb.style.marginTop = marginUsb + "vh";
      marginUsb += 1;

      //hd
      if (marginHd == -5) {
        hd.style.marginLeft = (Math.random() * (80 - 1) + 1) + "vw";
      }
      hd.style.marginTop = marginHd + "vh";
      marginHd += 1;


      xBasket = document.getElementById("basket").getBoundingClientRect().left;

      var ycp = cp.offsetTop;
      var xcp = cp.offsetLeft;
      var widthCp = cp.offsetWidth;
      var heightCp = cp.offsetHeight;

      var yWr = wr.offsetTop;
      var xWr = wr.offsetLeft;
      var widthWr = wr.offsetWidth;
      var heightWr = wr.offsetHeight;

      var yUsb = usb.offsetTop;
      var xUsb = usb.offsetLeft;
      var widthUsb = usb.offsetWidth;
      var heightUsb = usb.offsetHeight;

      var yHd = hd.offsetTop;
      var xHd = hd.offsetLeft;
      var widthHd = hd.offsetWidth;
      var heightHd = hd.offsetHeight;

      if (((xcp >= xBasket && xcp <= xBasket + widthBasket) || (xcp + widthCp >= xBasket && xcp + widthCp <= xBasket + widthBasket)) 
      && (ycp + heightCp > yBasket + 5 && ycp <= yBasket + heightBasket)) {
        cp.style.position = "absolute";
        wr.style.position = "absolute";
        marginCP = -5;
        errors++;
      } else if (ycp > heightFrame + 10) {
        marginCP = -5;
      }

      if (((xWr >= xBasket && xWr <= xBasket + widthBasket) || (xWr + widthWr >= xBasket && xWr + widthWr <= xBasket + widthBasket)) 
      && (yWr + heightWr > yBasket + 5 && yWr <= yBasket + heightBasket)) {
        marginWr = -5;
        errors++;
      } else if (yWr > heightFrame + 10) {
        marginWr = -5;
      }

      if (((xUsb >= xBasket && xUsb <= xBasket + widthBasket) || (xUsb + widthUsb >= xBasket && xUsb + widthUsb <= xBasket + widthBasket)) 
      && (yUsb + heightUsb > yBasket + 5 && yUsb <= yBasket + heightBasket)) {
        marginUsb = -5;
        errors++;
      } else if (yUsb > heightFrame + 10) {
        marginUsb = -5;
      }

      if (((xHd >= xBasket && xHd <= xBasket + widthBasket) || (xHd + widthHd >= xBasket && xHd + widthHd <= xBasket + widthBasket)) 
      && (yHd + heightHd > yBasket + 5 && yHd <= yBasket + heightBasket)) {
        marginHd = -5;
        score++;
      } else if (yHd > heightFrame + 10) {
        marginHd = -5;
      }

      document.getElementById("pts").innerHTML = score + "/10";

      if (score == 10) {
        document.getElementById("won").style.visibility = "visible";
        marginCP = -10;
        marginHd = -10;
        marginWr = -10;
        marginUsb = -10;
        setTimeout(function () { clearInterval(loop) }, 1000);
      } else if (errors >= 3) {
        document.getElementById("lost").style.visibility = "visible";
        marginCP = -10;
        marginHd = -10;
        marginWr = -10;
        marginUsb = -10;
        setTimeout(function () { clearInterval(loop) }, 1000);
      }

      console.log(errors);

    }, 100);
  }

  backChooseGame() {
    this.navigation.navigateBack("choose-game")
  }

  backHdPlay() {
    this.navigation.back();
  }

}

