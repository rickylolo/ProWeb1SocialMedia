DELIMITER //
CREATE PROCEDURE InsertarUsuario(IN u_Nombre VARCHAR(50),IN u_Apellidos VARCHAR(50),IN u_FechaNacimiento DATE,IN u_Correo VARCHAR(100),IN u_ImagenPerfil MEDIUMBLOB,IN u_NombreUsuario VARCHAR(50),IN u_Contra VARCHAR(30))
BEGIN 
   DECLARE u_id int;
   INSERT INTO Usuarios(Nombre,Apellidos,ApellidoMaterno,FechaNacimiento,Correo,ImagenPerfil,NombreUsuario,Contra,FechaCreacion) 
   VALUES (u_Nombre,u_Apellidos,u_FechaNacimiento,u_Correo,u_ImagenPerfil,u_NombreUsuario,u_Contra,DATE(now()));
   SET u_id = last_insert_id();
   SELECT * FROM Usuarios WHERE id = u_id;
END //
DELIMITER ;
SELECT * FROM Usuarios;