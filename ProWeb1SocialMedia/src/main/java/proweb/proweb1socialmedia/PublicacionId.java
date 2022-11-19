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
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class PublicacionId extends HttpServlet {

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
            int idPublicacion = Integer.parseInt(request.getParameter("id"));
            ArrayList<PublicacionDTO> resultados = PublicacionDAO.consultarId(idPublicacion);
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
                objeto += ",\"texto\":\"" + miPublicacion.getTexto()+ "\"";
                objeto += ",\"NombreCompleto\":\"" + miPublicacion.getNombreCompleto()+ "\"";
                objeto += ",\"Fecha\":\"" + miPublicacion.getFecha()+ "\"";
                objeto += ",\"spoiler\":\"" + miPublicacion.getSpoiler()+ "\"";
                objeto += ",\"TotalLikes\":\"" + miPublicacion.getTotalLikes()+ "\"";
                objeto += ",\"idUsuario\":\"" + miPublicacion.getIdUsuario()+ "\"";
                objeto += ",\"isImagen\":\"" + miPublicacion.getIsImagen()+ "\"";
                objeto += ",\"TotalComentarios\":\"" + miPublicacion.getTotalComentarios()+ "\"";
                objeto += "}";
                respuesta += objeto;
            }
            respuesta += "]";
            response.getWriter().print(respuesta);
        } catch (NamingException | SQLException ex) {
            Logger.getLogger(PublicacionId.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.getRequestDispatcher("/mainPage.jsp").forward(request,response);

    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
