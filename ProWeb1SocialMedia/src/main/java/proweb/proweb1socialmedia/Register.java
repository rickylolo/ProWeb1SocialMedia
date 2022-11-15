/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package proweb.proweb1socialmedia;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

/**
 *
 * @author ricky
 */
public class Register extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Register</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Register at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String nombre = request.getParameter("name");
            String apellidos = request.getParameter("apellido");
            String fechaNacimiento = request.getParameter("fecha");
            String correo = request.getParameter("email");
            String imagen = request.getParameter("imagen"); 
            String usuario = request.getParameter("usuario");
            String contrasena = request.getParameter("contra");
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("CALL InsertarUsuario(u_Nombre,u_Apellidos,u_FechaNacimiento,u_Correo,u_ImagenPerfil,u_NombreUsuario,u_Contra) "
                    + "VALUES (?,?,?,?,?,?,?)");
            comando.setString(1, nombre);
            comando.setString(2, apellidos);
            comando.setString(3, fechaNacimiento);
            comando.setString(4, correo);
            comando.setString(5, imagen);
            comando.setString(6, usuario);
            comando.setString(7, contrasena);
            comando.execute();
            comando.close();
            conexion.close();
        } catch (SQLException | NamingException e) {
 
        }
         request.getRequestDispatcher("/index.jsp").forward(request,response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
