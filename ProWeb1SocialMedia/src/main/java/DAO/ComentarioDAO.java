/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import DTO.ComentarioDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;


public class ComentarioDAO {
     public static ArrayList<ComentarioDTO> consultar(int idPublicacion) throws NamingException, SQLException{
        ArrayList<ComentarioDTO> comentarios = new ArrayList<>();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getAllComentariosPost(?);");
        comando.setInt(1, idPublicacion);

        if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){
                 ComentarioDTO comentario = new ComentarioDTO();
                  comentario.setIdPublicacion(resultados.getInt("CveComentario"));
                  comentario.setComentario(resultados.getString("Texto"));
                  comentario.setIdUsuario(resultados.getInt("IdUsuario"));
                  comentario.setSpoiler(resultados.getBoolean("Spoiler"));
                  comentario.setIdPublicacion(resultados.getInt("IdPublicacion"));
                  comentario.setUsername(resultados.getString("Username"));
                 comentarios.add(comentario);
            } 
        }
        comando.close();
        conexion.close();
        return comentarios;      
    }
}
