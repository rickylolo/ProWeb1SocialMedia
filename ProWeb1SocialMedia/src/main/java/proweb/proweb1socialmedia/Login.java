/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proweb.proweb1socialmedia;

import DTO.UserDTO;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

public class Login extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Login</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Login at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       request.getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      
        try {
            String correoLogin = request.getParameter("emailLogin");
            String passLogin = request.getParameter("passLogin");
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("CALL LoginUsuario(?,?);");
            comando.setString(1, correoLogin);
            comando.setString(2, passLogin);
            UserDTO miUsuario = null;
             
            if(comando.execute()){
                ResultSet resultados = comando.getResultSet();             
                resultados.next();
                if(!(resultados.wasNull())){
                    miUsuario = new UserDTO();               
                    miUsuario.setId(resultados.getInt("CveUSuario")); 
                }
                else{
                     comando.close();
                     conexion.close();
                     request.getRequestDispatcher("/Login.jsp").forward(request, response);
                }
            
               
            }
            comando.close();
            conexion.close();
                  
            
            HttpSession miSesion = request.getSession();
            miSesion.setAttribute("usuario", miUsuario);
          
       request.getRequestDispatcher("/mainPage.jsp").forward(request, response);
          
            
           
          

        } catch (SQLException | NamingException e) {

        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
