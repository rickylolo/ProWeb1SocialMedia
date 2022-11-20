
package DAO;

import DTO.UserDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import javax.sql.DataSource;

public class UserDAO{
      public static UserDTO consultar(int MiId) throws NamingException, SQLException{
        UserDTO User = new UserDTO();
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getUserData(?);");
        comando.setInt(1, MiId);
        if(comando.execute()){
            ResultSet resultado = comando.getResultSet();
            resultado.next();
            User.setId(resultado.getInt("CveUsuario"));
            User.setNombre(resultado.getString("Nombre"));
            User.setApellido(resultado.getString("Apellidos"));
            User.setFecha_nacimiento(resultado.getString("FechaNacimiento"));
            User.setCorreo_electronico(resultado.getString("Correo"));
            User.setNickname(resultado.getString("NombreUsuario"));
           
        }
        comando.close();
        conexion.close();
         return User;
      }
       
      public static ArrayList<UserDTO>consultarUsers() throws NamingException, SQLException{
         ArrayList<UserDTO> usuarios = new ArrayList<>();
    
        Context contexto = new InitialContext();
        Context ambiente = (Context)contexto.lookup("java:comp/env");
        DataSource infoConexion = (DataSource)ambiente.lookup("jdbc/MeetingPoint");
        Connection conexion = infoConexion.getConnection();
        PreparedStatement comando = conexion.prepareStatement("CALL getAllUsers();");

       if(comando.execute()){
            ResultSet resultados = comando.getResultSet();
            while(resultados.next()){         
                UserDTO User = new UserDTO();
                User.setId(resultados.getInt("CveUsuario"));
                User.setNombre(resultados.getString("Nombre"));
                User.setApellido(resultados.getString("Apellidos"));
                User.setNickname(resultados.getString("NombreUsuario"));
                usuarios.add(User);
                }
        }
        comando.close();
        conexion.close();
        return usuarios;      
      }
   
}
