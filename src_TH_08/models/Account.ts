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

  setAmount(amount){
    this.amount = amount;
  }

  getAccountNo(){
    return this.accountNo;
  }

  getPassword(){
    return this.password;
  }

  getAmount(){
    return this.amount;
  }
}
