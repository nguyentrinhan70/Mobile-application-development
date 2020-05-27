package nguyentrinhan70.atm.view;

import java.util.Scanner;

import nguyentrinhan70.atm.model.Account;

public class View {
	  // Ham chuyen tien
    public static boolean transfer(Account acc1, Account acc2){
        Scanner sc= new Scanner(System.in);
        System.out.print("Please enter your amount to transfer:");
        // Doc bien kieu double
        double amount = sc.nextDouble();
        return acc1.withdraw(amount)&&acc2.depost(amount);
    }    
    
 
    
// Ham rut tien
    public static boolean withdraw(Account acc){
        Scanner sc= new Scanner(System.in);
        System.out.print("Please enter your amount to withdraw:");
        // Doc bien kieu double
        double amount = sc.nextDouble();
        return acc.withdraw(amount);
    }       
    

        
    public static Account newAccount(int accNo, String pass, double amount, String custName){
        Account acc = new Account();
        acc.setAccountNo(accNo);
        acc.setPassword(pass);
        acc.setAmount(amount);
        acc.setCustomerName(custName);
        return acc;
   }

	public static void menu() {

		System.out.println("Welcome to ATM Application");
        Scanner sc = new Scanner(System.in);
        // Tạo một tài khoản mới và gán giá trị cho nó
        Account acc1 = newAccount(1,"abc123", 100, "Nguyen Van A");
                
        String choice="y";
        while(choice.equalsIgnoreCase("y"))
        {
            // Khoi tao menu
            System.out.println("Select your action: ");
            System.out.println("1-Login");
            System.out.println("2-View Account information");
            System.out.println("3-Withdraw");
            System.out.println("4-Transfer");
            
            int action = sc.nextInt();
            switch(action)
            {
               case 1: 
                   //Goi ham login 
                    if(Login.login(acc1)){
                       System.out.println("Login success");
                   }else
                       System.out.println("Login fail"); 
                   break;
               case 2: 
                   // Goi ham xem so du
                   viewAccount(acc1); 
                   break;
               case 3: 
                   // Goi ham rut tien
                   if (withdraw(acc1)){
                       System.out.println("Withdraw success");
                   }else
                       System.out.println("Login Fail");   
                   break;
               case 4: 
                   // Thêm tài khoản thứ 2 để nhận tiền
                       Account acc2 = newAccount(2, "12345", 50, "Tran Van B");
                       // Goi thu tuc chuyển tiền
                       if(transfer(acc1, acc2))
                       {
                           System.out.println("Transfer success");
                       }else
                           System.out.println("Transfer fail");
                       break;
               default: System.out.println("Invalid operation");
                   break;
            }//End switch... case
            System.out.println("Continue? (Y/N)");
            choice = sc.next();
            System.out.println();
           
        }// End while   

	}
	public static void viewAccount(Account acc) {
		//Hàm kiểm tra số dư
		System.out.println("Số tài khoản:"+ acc.getAccountNo());
		System.out.println("Tên tài khoản:"+ acc.getCustomerName());
		System.out.println("Số dư"+ acc.getAmount());
	}

}
