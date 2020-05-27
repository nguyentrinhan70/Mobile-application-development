import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  password:string = '';
  accountNo:string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataService: Data) {
    
  }

  ionViewDidLoad() {
    console.log('Start LoginPage');
  }

  login() {
    let account = this.dataService.validateAccount(this.accountNo, this.password);
    if (account != null) {
        this.navCtrl.push(HomePage, {
          account: account
        });
        return;
    }
    let message = 'Tài khoản hay mật khẩu không đúng!'; 
    let prompt = this.alertCtrl.create({
      title: 'Kết quả',
      message: message,
      buttons: [
        {
          text: 'OK'
        },
      ]
    });
    prompt.present();
  }

  addAccount() {

    let result = this.dataService.addAccount(this.accountNo, this.password);
    let message = (result == -1) 
      ? 'Data không được để trống!' 
      : (result == 1 
        ? 'Tài khoản `' + this.accountNo + '` đã được thêm!' 
        : 'Tài khoản `' + this.accountNo + '` đã có sẵn!'
    ); 
    let prompt = this.alertCtrl.create({
      title: 'Kết quả',
      message: message,
      buttons: [
        {
          text: 'OK'
        },
      ]
    });
    prompt.present();
  }

  deleteAccount() {
    let result = this.dataService.deleteAccount(this.accountNo);
    let message = result ? 'Tài khoản `' + this.accountNo + '` đã được xóa!' :
          'Tài khoản `' + this.accountNo + '` không có!'; 
    let prompt = this.alertCtrl.create({
      title: 'Kết quả',
      message: message,
      buttons: [
        {
          text: 'OK'
        },
      ]
    });
    prompt.present();
  }

  viewAccounts() {
    let message = this.dataService.getAllAccounts();
    let prompt = this.alertCtrl.create({
      title: 'Tất cả tài khoản',
      message: message,
      buttons: [
        {
          text: 'OK'
        },
      ]
    });
    prompt.present();
  }

}
