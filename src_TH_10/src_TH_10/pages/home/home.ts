import { Component } from '@angular/core';
import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';
import { Account } from '../../models/Account';
import { Data } from '../../providers/data';
import { CameraPage } from '../camera/camera';
import { MapPage } from '../map/map';

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

	takePicture(): void {
		this.navCtrl.push(CameraPage, {});
	}

	viewMap(): void {
		this.navCtrl.push(MapPage, {});
	}

	exit(): void {
    	this.platform.exitApp();
	}
}