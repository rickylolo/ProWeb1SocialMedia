/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package proweb.proweb1socialmedia;


import DAO.UserDAO;
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


public class Edit extends HttpServlet {
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
            HttpSession session=request.getSession();
            UserDTO user=(UserDTO)session.getAttribute("usuario");
            int iduser = user.getId();
            UserDTO miUser;
        try {
            miUser = UserDAO.consultar(iduser);
            response.setContentType("application/json;charset=UTF-8");
            
            String respuesta = "[";
   
    
                String objeto = "{";
                objeto += "\"id\":" + miUser.getId();
                objeto += ",\"username\":\"" + miUser.getNickname()+ "\"";
                objeto += ",\"name\":\"" + miUser.getNombre()+ "\"";
                objeto += ",\"lastName\":\"" + miUser.getApellido()+ "\"";
                objeto += ",\"email\":\"" + miUser.getCorreo_electronico()+ "\"";
                objeto += ",\"fecha\":\"" + miUser.getFecha_nacimiento()+ "\"";
                objeto += "}";
                respuesta += objeto;
                    respuesta += "]";
                response.getWriter().print(respuesta);
            
        
             } catch (NamingException | SQLException ex) {
            Logger.getLogger(Edit.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
           
        try {  
            InputStream stream = null;
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("CALL ActualizarUsuario(?,?,?,?,?,?);");
            DiskFileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);
            List<FileItem> items = upload.parseRequest(request);
              HttpSession session=request.getSession();
            UserDTO user=(UserDTO)session.getAttribute("usuario");
           int iduser = user.getId();
            comando.setInt(1, iduser);
            for(FileItem item : items){
                if(!item.isFormField()){
                    stream = item.getInputStream();
                    comando.setBlob(5,stream);
                }
                else{
                     String fieldName = item.getFieldName();
                     String fieldValue = item.getString();
                     switch(fieldName){
                         case "name":
                               comando.setString(2, fieldValue);
                             break;
                         case "apellido":
                              comando.setString(3, fieldValue);
                             break;
                         case "fecha":
                              comando.setString(4, fieldValue);
                             break;
                         case "contra":             
                              comando.setString(6, fieldValue);
                             break;
                      
                     } 
                }
            }
            comando.execute();
            comando.close();
            stream.close();
            conexion.close();
    
       
        
           
        } 
        catch (NamingException | SQLException | FileUploadException ex) {
            Logger.getLogger(Edit.class.getName()).log(Level.SEVERE, null, ex);
        }
         request.getRequestDispatcher("/mainPage.jsp").forward(request,response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

 

}
