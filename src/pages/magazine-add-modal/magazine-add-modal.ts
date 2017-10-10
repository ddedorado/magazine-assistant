import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MagazineAddModal page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-magazine-add-modal',
  templateUrl: 'magazine-add-modal.html',
})
export class MagazineAddModal {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MagazineAddModal');
  }

}
