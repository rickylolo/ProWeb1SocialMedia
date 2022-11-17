
package DAO;

import DTO.UserDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
       
   
}
