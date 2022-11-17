/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package proweb.proweb1socialmedia;

import DAO.PublicacionDAO;
import DTO.PublicacionDTO;
import DTO.UserDTO;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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

public class Publicaciones extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Publicaciones</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Publicaciones at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            ArrayList<PublicacionDTO> resultados = PublicacionDAO.consultar();
            response.setContentType("application/json;charset=UTF-8");
            String respuesta = "[";
            boolean esPrimero = true;
            for(PublicacionDTO miPublicacion : resultados){
                if(esPrimero){
                    esPrimero = false;
                }
                else{
                    respuesta +=",";
                }
                String objeto = "{";
                objeto += "\"id\":" + miPublicacion.getId();
                objeto += ",\texto\":\"" + miPublicacion.getTexto() + "\"";
                objeto += ",\"idUsuario\":\"" + miPublicacion.getIdUsuario()+ "\"";
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
        String accion = "";
        PublicacionDTO miPublicacion = new PublicacionDTO();
         DiskFileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);
            List<FileItem> items;
        try {
            items = upload.parseRequest(request);
            InputStream stream = null;
            for(FileItem item : items){
                if(!item.isFormField()){
                    stream = item.getInputStream();
                    miPublicacion.setImagen(stream);
             
          
                }
                else{
                     String fieldName = item.getFieldName();
                     String fieldValue = item.getString();
                     switch(fieldName){
                         case "texto":
                               miPublicacion.setTexto(fieldValue);
                             break;
                         
                            
                     
                         case "accion":
                             accion=fieldValue;
                             break;
                     
                     } 
                }
            }
          
            HttpSession session=request.getSession();
            UserDTO user=(UserDTO)session.getAttribute("usuario");
            int iduser = user.getId();
            miPublicacion.setIdUsuario(iduser);
            if(accion.equals("insertar")){
                PublicacionDAO.insertar(miPublicacion);
                stream.close();
            }
               
            if(accion.equals("actualizar")){
               PublicacionDAO.actualizar(miPublicacion);      
            }
               
            if(accion.equals("eliminar")){
               PublicacionDAO.eliminar(miPublicacion);   
            }
            
            
            
        } catch (FileUploadException | NamingException | SQLException ex) {
            Logger.getLogger(Publicaciones.class.getName()).log(Level.SEVERE, null, ex);
        }
        request.getRequestDispatcher("/mainPage.jsp").forward(request,response);

    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
