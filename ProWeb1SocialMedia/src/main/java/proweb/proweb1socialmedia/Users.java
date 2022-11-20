/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package proweb.proweb1socialmedia;

import DAO.UserDAO;
import DTO.UserDTO;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Users extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Users</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Users at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
             try {
            ArrayList<UserDTO> resultados = UserDAO.consultarUsers();
            response.setContentType("application/json;charset=UTF-8");
            String respuesta = "[";
            boolean esPrimero = true;
            for(UserDTO miUser : resultados){
                if(esPrimero){
                    esPrimero = false;
                }
                else{
                    respuesta +=",";
                }
               String objeto = "{";
                objeto += "\"id\":" + miUser.getId();
                objeto += ",\"username\":\"" + miUser.getNickname()+ "\"";
                objeto += ",\"name\":\"" + miUser.getNombre()+ "\"";
                objeto += ",\"lastName\":\"" + miUser.getApellido()+ "\"";
                objeto += ",\"email\":\"" + miUser.getCorreo_electronico()+ "\"";
                objeto += ",\"fecha\":\"" + miUser.getFecha_nacimiento()+ "\"";
                objeto += "}";
                respuesta += objeto;
            }
            respuesta += "]";
            response.getWriter().print(respuesta);
        } catch (NamingException | SQLException ex) {
            Logger.getLogger(Publicaciones.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
 
    


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
