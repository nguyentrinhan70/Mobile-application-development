import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Account } from '../../models/Account';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})

export class InfoPage {

	account:Account;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.account = this.navParams.get('account');
  }
	
	ionViewDidLoad() {
    	console.log('Start InfoPage');
	}

}