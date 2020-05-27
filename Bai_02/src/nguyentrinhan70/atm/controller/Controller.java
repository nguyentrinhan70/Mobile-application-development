package nguyentrinhan70.atm.controller;

import java.util.Scanner;

import nguyentrinhan70.atm.model.Account;

public class Controller {
	
	public static boolean withdraw(Account acc) {
		Scanner sc;
		sc = new Scanner(System.in);
		System.out.println("Nhập số tiền cần rút:");
		//Đọc biến kiểu double
		double amount = sc.nextDouble();
		if(amount<=acc.getAmount()){
			acc.setAmount(acc.getAmount()-amount);
			return true;
		}
		return false;
	}
	
	public boolean checkLogin(int accNo, String pass){
	      // Kiem tra login voi tai khoan nay  
	        return (accNo==Account.getAccountNo()) && pass.equals(Account.getPassword());
	    }
	    public boolean withdraw(double amount){
	        // Rut tien khoi tai khoan
	        if(amount < Account.getAmount()){
	            amount -=amount;
	            return true;
	        }else
	            return false;
	    }
	    public boolean depost(double amount){
	        // Nop tien vao tai khoan
	        if(amount >0){
	            amount +=amount;
	            return true;
	        }else
	            return false;
	    }

}
