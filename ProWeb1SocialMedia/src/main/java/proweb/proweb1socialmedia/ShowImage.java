
package proweb.proweb1socialmedia;


import DTO.UserDTO;
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
import javax.servlet.http.HttpSession;

import javax.sql.DataSource;

public class ShowImage extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        response.setContentType("image/png");
        try {          
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("SELECT * FROM Usuarios WHERE CveUsuario= (?)");
             HttpSession session=request.getSession();
            UserDTO user=(UserDTO)session.getAttribute("usuario");
           int iduser = user.getId();
           comando.setInt(1,iduser);
            if(comando.execute()){
                ResultSet miResultSet = comando.getResultSet();
                miResultSet.next();
                 byte[] miFoto = miResultSet.getBytes("ImagenPerfil");
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
