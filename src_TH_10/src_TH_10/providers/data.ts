import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Account } from '../models/Account';
import { Server } from '../providers/server';

import * as config from '../app/config';

@Injectable()
export class Data {

  public accounts: Account[] = [];

  constructor(public storage: Storage, public server: Server){
  }

  ionViewDidLoad() {
      console.log('Start Data');
  }

  start(): void {

    if (config.DATA_FROM_SERVER) {
      this.startFromServer();
    } else {
      this.startFromStorage();
    }
  }
  
  startFromStorage(): void {
      let existingAccounts:boolean = false;

      // read from local storage
      this.readFromStorage().then((accounts) => {
        if (accounts != null) {
          let savedAccounts = accounts;
          console.log('data.ts - saved accounts length: ' + savedAccounts.length);
          savedAccounts.forEach((savedAccount) => {
            let loadAccount = new Account();
            loadAccount.setAccountNo(savedAccount.accountNo);
            loadAccount.setPassword(savedAccount.password);
            loadAccount.setAmount(savedAccount.amount);
            this.accounts.push(loadAccount);
          });
          existingAccounts = true;
        }
      });
  }

  saveToStorage(): void {
    let savedAccounts = [];
    this.accounts.forEach((account) => {
      savedAccounts.push({
        accountNo: account.getAccountNo(),
        password: account.getPassword(),
        amount: account.getAmount(),
      });
    });
    this.storage.set('accounts', savedAccounts);
  }

  readFromStorage(): Promise<any> {
    return this.storage.get('accounts');  
  }

  deleteFromStorage(): Promise<any> {
    return this.storage.remove('accounts');  
  }

  startFromServer(): void {
    console.log("startFromServer");
    let url = config.SERVER_URL;
    // let seq = this.server.post(url);
    this.server.post(url).subscribe((response:any) => {
      let accounts = JSON.parse(response.accounts);
               console.log("accounts = " + accounts.length);
      accounts.forEach((savedAccount) => {
        let loadAccount = new Account();
        loadAccount.setAccountNo(savedAccount.accountNo);
        loadAccount.setPassword(savedAccount.password);
        loadAccount.setAmount(savedAccount.amount);
        this.accounts.push(loadAccount);
      });
    }, error => {
         console.log(error.message);
    });
  }

  saveToServer(): void {
    let url = config.SERVER_URL;
    let params = 'accounts=' + this.setJSONAccounts();    
    this.server.post(url, params).subscribe((response:any) => {
    }, error => {
         console.log(error.message);
    });
  }

  setJSONAccounts(): any {
    let saveData = [];
    this.accounts.forEach((account) => {
      saveData.push({
        accountNo: account.getAccountNo(),
        password: account.getPassword(),
        amount: account.getAmount(),
      });
    });
    return JSON.stringify(saveData);
  }

  validateAccount(accountNo:string, password:string): Account {
    let accounts = this.accounts;
    for (var i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      let accNo = account.getAccountNo();
      let pwd = account.getPassword();
      if (accNo == accountNo && pwd == password)
        return account;
    }
    return null;
  }  

  getAccount(accountNo:string): Account {
    let accounts = this.accounts;
    for (var i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      let accNo = account.getAccountNo();
      if (accNo == accountNo)
        return account;
    }
    return null;
  }  

  addAccount(accountNo:string, password:string): any {

    if (accountNo.length == 0 || password.length == 0)
      return -1;

    // check if this account exists
    let account = this.getAccount(accountNo);
    if (account != null) {
      // already exist
      return 0;
    }
    // add new account
    account = new Account();
    account.setAccountNo(accountNo);
    account.setPassword(password);
    account.setAmount(200000);
    this.accounts.push(account);

    if (config.DATA_FROM_SERVER) {
      this.saveToServer();
    } else {
      this.saveToStorage();
    }

    return 1;
  }  

  deleteAccount(accountNo:string): boolean {
    let account = this.getAccount(accountNo);
    if (account == null) {
      // not exist
      return false;
    }
    var index = this.accounts.indexOf(account);
    this.accounts.splice(index, 1);
    
    if (config.DATA_FROM_SERVER) {
      this.saveToServer();
    } else {
      this.saveToStorage();
    }

    return true;
  }
  
  getAllAccounts(): string {
    let result = '';
    let accounts = this.accounts;
    for (var i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      let accNo = account.getAccountNo();
      result += '<p>' + (i+1) + ' - ' + accNo + '</p>';
    }
    return result;
  }

}