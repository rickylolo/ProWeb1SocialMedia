/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package proweb.proweb1socialmedia;


import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

public class ShowImagePost extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       response.setContentType("image/png");
        try {          
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("SELECT Imagen FROM Publicaciones WHERE CvePubli= (?) AND Activo = 1");

           int idPublicacion = Integer.parseInt(request.getParameter("id"));
           comando.setInt(1,idPublicacion);
            if(comando.execute()){
                ResultSet miResultSet = comando.getResultSet();
                miResultSet.next();
                 byte[] miFoto = miResultSet.getBytes("Imagen");
                 response.getOutputStream().write(miFoto);
                
            }
            comando.close();
            conexion.close(); 
          
                
             
            } catch (IOException | SQLException e) {
               throw new ServletException("Cannot parse multipart request.", e); 

            } catch (NamingException ex) {    
            Logger.getLogger(ShowImage.class.getName()).log(Level.SEVERE, null, ex);
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
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
