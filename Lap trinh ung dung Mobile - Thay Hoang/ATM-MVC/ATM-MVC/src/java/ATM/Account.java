package ATM;
public class Account {
    private int accountNo;
    private String password;
    private double amount;
    private String customerName;
    
    //Constructor
    public Account(int accountNo, String password, double amount, String customerName){
        this.accountNo=accountNo;
        this.password= password;
        this.amount=amount;
        this.customerName=customerName;      
    }
    
    public Account(){
        accountNo=0;
        password="";
        amount=0;
        customerName="";      
    }
   
    //Ham set de thay doi gia tri cho thuoc tinh
    public void setAccountNo(int accNo){
        this.accountNo =accNo;     
    }
    //Ham get de lay gia tri cua thuoc tinh
    public int getAccountNo(){
        return this.accountNo;     
    }
    public void setPassword(String pass){
        this.password =pass;     
    }
    //Ham get de lay gia tri cua thuoc tinh
    public String getPassword(){
        return this.password;     
    }
    public void setAmount(double amount){
        this.amount= amount;     
    }
    //Ham get de lay gia tri cua thuoc tinh
    public double getAmount(){
        return this.amount;     
    }
    public void setCustomerName(String custName){
        this.customerName= custName;     
    }
    //Ham get de lay gia tri cua thuoc tinh
    public String getCustomerName(){
        return this.customerName;     
    }
    public boolean checkLogin(int accNo, String pass){
        return (accNo==accountNo)&& (pass.equals(this.password));              
    }
}
