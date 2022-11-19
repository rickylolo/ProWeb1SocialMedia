
package DAO;

import DTO.PublicacionDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class PublicacionDAO {
    public static ArrayList<PublicacionDTO> consultar() throws NamingException, SQLException{
        ArrayList<PublicacionDTO> publicaciones = new ArrayList<>();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getAllPosts();");
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                 PublicacionDTO publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setSpoiler(resultados.getBoolean("Spoiler"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));
                  publicacion.setNombreCompleto(resultados.getString("NombreCompleto"));
                  publicacion.setFecha(resultados.getString("FechaCreacion"));
                  publicacion.setTotalLikes(resultados.getString("TotalLikes"));
                  publicacion.setIsImagen(resultados.getInt("isImagen"));
                  publicacion.setTotalComentarios(resultados.getString("TotalComentarios"));
                 publicaciones.add(publicacion);
            } 
        }
        comando.close();
        conexion.close();
        return publicaciones;      
    }
    
    public static ArrayList<PublicacionDTO> consultarLike() throws NamingException, SQLException{
        ArrayList<PublicacionDTO> publicaciones = new ArrayList<>();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getAllPostsOrderByLikes();");
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                 PublicacionDTO publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setSpoiler(resultados.getBoolean("Spoiler"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));
                  publicacion.setNombreCompleto(resultados.getString("NombreCompleto"));
                  publicacion.setFecha(resultados.getString("FechaCreacion"));
                  publicacion.setTotalLikes(resultados.getString("TotalLikes"));
                  publicacion.setIsImagen(resultados.getInt("isImagen"));
                  publicacion.setTotalComentarios(resultados.getString("TotalComentarios"));
                 publicaciones.add(publicacion);
            } 
        }
        comando.close();
        conexion.close();
        return publicaciones;      
    }
      
    public static ArrayList<PublicacionDTO> consultarComentario() throws NamingException, SQLException{
        ArrayList<PublicacionDTO> publicaciones = new ArrayList<>();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getAllPostsOrderByComments();");
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                 PublicacionDTO publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setSpoiler(resultados.getBoolean("Spoiler"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));
                  publicacion.setNombreCompleto(resultados.getString("NombreCompleto"));
                  publicacion.setFecha(resultados.getString("FechaCreacion"));
                  publicacion.setTotalLikes(resultados.getString("TotalLikes"));
                  publicacion.setIsImagen(resultados.getInt("isImagen"));
                  publicacion.setTotalComentarios(resultados.getString("TotalComentarios"));
                 publicaciones.add(publicacion);
            } 
        }
        comando.close();
        conexion.close();
        return publicaciones;      
    }
    
     public static ArrayList<PublicacionDTO> consultarSearch(String texto,String hashtag) throws NamingException, SQLException{
        ArrayList<PublicacionDTO> publicaciones = new ArrayList<>();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL searchPosts(?,?);");
        comando.setString(1, texto);
        comando.setString(2, hashtag);
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                 PublicacionDTO publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setSpoiler(resultados.getBoolean("Spoiler"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));
                  publicacion.setNombreCompleto(resultados.getString("NombreCompleto"));
                  publicacion.setFecha(resultados.getString("FechaCreacion"));
                  publicacion.setTotalLikes(resultados.getString("TotalLikes"));
                  publicacion.setIsImagen(resultados.getInt("isImagen"));
                  publicacion.setTotalComentarios(resultados.getString("TotalComentarios"));
                 publicaciones.add(publicacion);
            } 
        }
        comando.close();
        conexion.close();
        return publicaciones;      
    }
    
     public static ArrayList<PublicacionDTO> consultarId(int idPublicacion) throws NamingException, SQLException{
        ArrayList<PublicacionDTO> publicaciones = new ArrayList<>();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getPostId(?);");
        comando.setInt(1, idPublicacion);
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                 PublicacionDTO publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setSpoiler(resultados.getBoolean("Spoiler"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));
                  publicacion.setNombreCompleto(resultados.getString("NombreCompleto"));
                  publicacion.setFecha(resultados.getString("FechaCreacion"));
                  publicacion.setTotalLikes(resultados.getString("TotalLikes"));
                  publicacion.setIsImagen(resultados.getInt("isImagen"));
                  publicacion.setTotalComentarios(resultados.getString("TotalComentarios"));
                 publicaciones.add(publicacion);
            } 
        }
        comando.close();
        conexion.close();
        return publicaciones;      
    }
    
      public static PublicacionDTO insertar(PublicacionDTO miPublicacion) throws NamingException, SQLException{
        PublicacionDTO publicacion = null;
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL InsertarPublicacion(?,?,?);");
        comando.setString(1,miPublicacion.getTexto());
        comando.setBlob(2,miPublicacion.getImagen());
        comando.setInt(3, miPublicacion.getIdUsuario());
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                  publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));

            } 
        }
        comando.close();
        conexion.close();
        return publicacion;      
    }
      
      
      
      public static PublicacionDTO actualizar(PublicacionDTO miPublicacion) throws NamingException, SQLException{
        PublicacionDTO publicacion = null;
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL ActualizarPublicacion(?,?,?);");
        comando.setInt(1,miPublicacion.getId());
        comando.setString(2,miPublicacion.getTexto());
        comando.setBlob(3, miPublicacion.getImagen());
        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                  publicacion = new PublicacionDTO();
                  publicacion.setId(resultados.getInt("CvePubli"));
                  publicacion.setTexto(resultados.getString("Texto"));
                  publicacion.setSpoiler(resultados.getBoolean("Spoiler"));
                  publicacion.setIdUsuario(resultados.getInt("IdUsuario"));
                  publicacion.setActivo(resultados.getBoolean("Activo"));
                  

            } 
        }
        comando.close();
        conexion.close();
        return publicacion;      
    }
      
      
      public static void eliminar(PublicacionDTO miPublicacion) throws NamingException, SQLException{
        PublicacionDTO publicacion = null;
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL EliminarPublicacion(?);");
        comando.setInt(1,miPublicacion.getId());
        comando.execute();
        comando.close();
        conexion.close();
    }
    
    
}
