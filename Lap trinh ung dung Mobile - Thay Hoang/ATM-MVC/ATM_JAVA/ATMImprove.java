
package atmimprove;

import java.util.Scanner;

public class ATMImprove {

      public static void main(String[] args) {
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
                     if(login(acc1)){
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
    }//End main function
    
   // Ham chuyen tien
    public static boolean transfer(Account acc1, Account acc2){
        Scanner sc= new Scanner(System.in);
        System.out.print("Please enter your amount to transfer:");
        // Doc bien kieu double
        double amount = sc.nextDouble();
        return acc1.withdraw(amount)&&acc2.depost(amount);
    }    
    
// Ham xem so du
    public static void viewAccount(Account acc){
        System.out.println("Account Number: " + acc.getAccountNo());
        System.out.println("Account Name: " + acc.getCustomerName());
        System.out.println("Amount: " + acc.getAmount());
    }    
    
// Ham rut tien
    public static boolean withdraw(Account acc){
        Scanner sc= new Scanner(System.in);
        System.out.print("Please enter your amount to withdraw:");
        // Doc bien kieu double
        double amount = sc.nextDouble();
        return acc.withdraw(amount);
    }       
    
// Ham xu ly login
    public static boolean login(Account acc){
        // Yeu cau nguoi dung nhap du lieu
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter your account number:");
        // Doc bien kieu Int
        int accNo = sc.nextInt();
        System.out.print("Enter your password:");
        String pass = sc.next();
        //Kiem tra doi chieu tai khoan va mat khau
        return acc.checkLogin(accNo, pass);
    }
        
    public static Account newAccount(int accNo, String pass, double amount, String custName){
        Account acc = new Account();
        acc.setAccountNo(accNo);
        acc.setPassword(pass);
        acc.setAmount(amount);
        acc.setCustomerName(custName);
        return acc;
   }

    
}
