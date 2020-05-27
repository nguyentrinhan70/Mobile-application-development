import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Account } from '../../models/Account';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	accountNo:string='';
	password:string;
	account:Account;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.accountNo = this.navParams.get('accountNo');
		this.password = this.navParams.get('password');

		// create an account
		this.account = new Account();
    this.account.setAccountNo(this.accountNo);
    this.account.setPassword(this.password);

  }
	
	ionViewDidLoad() {
    console.log('Start HomePage');
	}

  viewAccount() {
    this.navCtrl.push(InfoPage, {
        account: this.account
      });
  }

}