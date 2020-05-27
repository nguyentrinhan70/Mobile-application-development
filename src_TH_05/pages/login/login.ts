import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  password:string = '';
  accountNo:string = '';

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('Start LoginPage');
  }

  doLogin() {
      this.navCtrl.push(HomePage, {
        accountNo: this.accountNo,
        passwd: this.password
      });
  }


  

}
