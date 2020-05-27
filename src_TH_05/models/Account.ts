export class Account {

  accountNo:string = '';
  password:string = '';
  amount:number = 0;
  
  constructor(){
    this.accountNo = '';
    this.password = '';
    this.amount = 100000;
  }

  setAccountNo(accountNo){
    this.accountNo = accountNo;
  }

  setPassword(password){
    this.password = password;
  }

  getAccountNo(){
    return this.accountNo;
  }

  getAmount(){
    return this.amount;
  }
}
