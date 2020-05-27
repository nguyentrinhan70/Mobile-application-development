package nguyentrinhan70.atm.model;

public class Account {
	private static int accountNo;
	private static String password;
	private static double amount;
	private String customerName;
	
	
	public Account() {
		super();
		accountNo =0;
		password ="";
		amount =0;
		customerName="";
	}
	public Account(int accountNo, String password, double amount, String customerName) {
		super();
		this.accountNo = accountNo;
		this.password = password;
		this.amount = amount;
		this.customerName = customerName;
	}
	public static int getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}
	public static String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public static double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	
	public boolean checkLogin(int accNo, String pass) {
		return(accNo==accountNo)&&(pass.equals(this.password));
		
	}
	
}
