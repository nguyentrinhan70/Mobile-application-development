import { Component } from '@angular/core';
import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';
import { Account } from '../../models/Account';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	account:Account;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
  		public platform: Platform, public dataService: Data) {
  		this.account = this.navParams.get('account');
  	}
	
	ionViewDidLoad() {
    	console.log('Start HomePage');
	}

	viewAccount(): void {
		let prompt = this.alertCtrl.create({
		  title: 'Chi tiết tài khoản',
		  message: 'Số tiền:' + this.account.getAmount(),
		  buttons: [
		    {
		      text: 'OK'
		    },
		  ]
		});
    	prompt.present();
  	}

	exit(): void {
    	this.platform.exitApp();
	}
}