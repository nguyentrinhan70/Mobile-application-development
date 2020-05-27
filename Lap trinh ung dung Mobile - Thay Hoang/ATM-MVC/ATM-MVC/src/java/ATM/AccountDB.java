/*
 * Ket noi CSDL va tao DB
 */
package ATM;
public class AccountDB {
    /* Phuong thuc nay lay du lieu va tao Account */
    public static Account getAccount(){
        Account acc=new Account();
        acc.setAccountNo(1);
        acc.setCustomerName("Nguyen Van A");
        acc.setPassword("12345");
        acc.setAmount(100);
        return acc;
    }
}
