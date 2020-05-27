package nguyentrinhan70.atm.model;

public class AccountDB {
	//Phương thức ày lấy dữ liệu và tạo Account
	public static Account getAccount() {
		Account acc = new Account();
		acc.setAccountNo(1);
		acc.setCustomerName("Nguyễn Trí Nhân");
		acc.setPassword("12345");
		acc.setAmount(100);
		return acc;
	}

}
