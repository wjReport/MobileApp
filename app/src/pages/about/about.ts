import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',//1
})
export class AboutPage {

  page_content = "<ion-card class='card-iÍos'><ion-card-header>hello</ion-card-header><ion-card-content>Card Content</ion-card-content></ion-card>";


  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  showLogin() {
    this.navCtrl.push('LoginPage')
  }

}
