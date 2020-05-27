import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Account } from '../models/Account';

@Injectable()
export class Data {

  public accounts: Account[] = [];

  constructor(public storage: Storage){
  }

  ionViewDidLoad() {
      console.log('Start Data');
  }

  start(): void {
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
    this.saveToStorage();
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
    this.saveToStorage();
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