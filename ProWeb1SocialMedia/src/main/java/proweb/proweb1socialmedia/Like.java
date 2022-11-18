
package proweb.proweb1socialmedia;

import DTO.UserDTO;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
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
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class Like extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Like</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Like at " + request.getContextPath() + "</h1>");
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
        try{
            int miIdPublicacion = Integer.parseInt(request.getParameter("idPublicacion"));
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("CALL InsertarLike(?,?);");
                HttpSession session=request.getSession();
            UserDTO user=(UserDTO)session.getAttribute("usuario");
            int iduser = user.getId();
            comando.setInt(1,miIdPublicacion);
            comando.setInt(2,iduser);

            comando.execute();
            comando.close();
            conexion.close();
        }
          catch (NamingException | SQLException  ex) {
            Logger.getLogger(Register.class.getName()).log(Level.SEVERE, null, ex);
        }
    
    }
    

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
