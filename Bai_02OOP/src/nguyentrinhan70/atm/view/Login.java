package nguyentrinhan70.atm.view;

import java.util.Scanner;

import nguyentrinhan70.atm.model.Account;

public class Login {
	public static  boolean login(Account acc) {
		//Yêu cầu người nhập dữ liệu
		Scanner sc = new Scanner(System.in);
		System.out.println("Nhập số tài khoản:");
		//Đọc kiểu Int
		int accNo = sc.nextInt();
		System.out.println("Nhập password");
		String pass = sc.next();
		//Kiểm tra đối chiếu tài khoản và mật khẩu
		return acc.getAccountNo()==accNo && acc.getPassword().equals(pass);
	}

}
