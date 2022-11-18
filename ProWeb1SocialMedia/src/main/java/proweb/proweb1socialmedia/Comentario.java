/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package proweb.proweb1socialmedia;

import DAO.ComentarioDAO;
import DAO.PublicacionDAO;
import DTO.ComentarioDTO;
import DTO.PublicacionDTO;
import DTO.UserDTO;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
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

public class Comentario extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Comentario</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Comentario at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

  
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       try {
            int miIdPublicacion = Integer.parseInt(request.getParameter("idPublicacion"));
            ArrayList<ComentarioDTO> resultados = ComentarioDAO.consultar(miIdPublicacion);
            response.setContentType("application/json;charset=UTF-8");
            String respuesta = "[";
            boolean esPrimero = true;
            for(ComentarioDTO miComentario : resultados){
                if(esPrimero){
                    esPrimero = false;
                }
                else{
                    respuesta +=",";
                }
                String objeto = "{";
                objeto += "\"idComentario\":" + miComentario.getIdComentario();
                objeto += ",\"texto\":\"" + miComentario.getComentario()+ "\"";
                objeto += ",\"username\":\"" + miComentario.getUsername()+ "\"";
                objeto += ",\"idPublicacion\":\"" + miComentario.getIdPublicacion()+ "\"";
                objeto += ",\"idUsuario\":\"" + miComentario.getIdUsuario()+ "\"";
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
         try{
            int miIdPublicacion = Integer.parseInt(request.getParameter("idPublicacion"));
            String miComentario = request.getParameter("miComentario");
            Context contexto = new InitialContext();
            Context ambiente = (Context)contexto.lookup("java:comp/env");
            DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
            Connection conexion = infoConexion.getConnection();
            PreparedStatement comando = conexion.prepareStatement("CALL InsertarComentario(?,?,?);");
                HttpSession session=request.getSession();
            UserDTO user=(UserDTO)session.getAttribute("usuario");
            int iduser = user.getId();
            comando.setString(1,miComentario);
            comando.setInt(2,iduser);
            comando.setInt(3,miIdPublicacion);
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
