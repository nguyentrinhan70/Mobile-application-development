
package ATM;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "LoginServlet", urlPatterns = {"/LoginServlet"})
public class LoginServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {       
        // 1. Lay thong tin tu trang Login
        String straccNo =request.getParameter("accountNo");
        String pass = request.getParameter("passwd");
        int accNo = Integer.parseInt(straccNo);
                
        // 2. Lay thong tin tu CSDL va tao tai khoan de kiem tra
        Account acc = AccountDB.getAccount();
        
       
        
        //3. Xay dung trang ket qua
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Login Result</title>");            
            out.println("</head>");
            out.println("<body>");
            // Doan lenh kiem tra ket qua 
            if(acc.checkLogin(accNo, pass)){
                out.println("<h1>Welcome: " + acc.getCustomerName() + " to ATM system </h1>");
                out.println("<h2>Please seclect an action to start transaction</h2>");
            }else{
                out.println("<h1>Login fail. Please try again.</h1>");
            }
            
            out.println("</body>");
            out.println("</html>"); 
        } 
         //3.  Chuyen sang trang ket qua da co san
        /*request.setAttribute("account", acc); //Gan bien de trang ket qua lay
        String url="/thanks.jsp"; //Trang dichs
        getServletContext() //Chuyen sang trang ket qua
                .getRequestDispatcher(url)
                .forward(request, response); */
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "This is Login Sevlet";
    }// </editor-fold>

}
