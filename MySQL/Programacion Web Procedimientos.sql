
USE MeetingPoint;
DROP PROCEDURE IF EXISTS InsertarUsuario;
DELIMITER //
CREATE PROCEDURE InsertarUsuario(IN u_Nombre VARCHAR(50),IN u_Apellidos VARCHAR(50),IN u_FechaNacimiento DATE,IN u_Correo VARCHAR(100),IN u_ImagenPerfil MEDIUMBLOB,IN u_NombreUsuario VARCHAR(50),IN u_Contra VARCHAR(30))
BEGIN 
   DECLARE u_id int;
   INSERT INTO Usuarios(Nombre,Apellidos,FechaNacimiento,Correo,ImagenPerfil,NombreUsuario,Contra,FechaCreacion) 
   VALUES (u_Nombre,u_Apellidos,u_FechaNacimiento,u_Correo,u_ImagenPerfil,u_NombreUsuario,u_Contra,DATE(now()));
   SET u_id = last_insert_id();
   SELECT * FROM Usuarios WHERE CveUsuario = u_id;
END //

DROP PROCEDURE IF EXISTS ActualizarUsuario;
DELIMITER //
CREATE PROCEDURE ActualizarUsuario(IN u_id INT,IN u_Nombre VARCHAR(50),IN u_Apellidos VARCHAR(50),IN u_FechaNacimiento VARCHAR(20),IN u_ImagenPerfil MEDIUMBLOB,IN u_Contra VARCHAR(30))
BEGIN 
  SET u_Nombre=IF(u_Nombre='',NULL,u_Nombre),
	  u_Apellidos=IF(u_Apellidos='',NULL,u_Apellidos),
      u_ImagenPerfil=IF(u_ImagenPerfil='',NULL,u_ImagenPerfil),
      u_Contra=IF(u_Contra='',NULL,u_Contra),
      u_FechaNacimiento=IF(u_FechaNacimiento='',NULL,u_FechaNacimiento);
   UPDATE Usuarios SET
          Nombre = IFNULL(u_Nombre,Nombre),
		  Apellidos = IFNULL(u_Apellidos,Apellidos),
		  FechaNacimiento = IFNULL(u_FechaNacimiento,FechaNacimiento) ,
	      ImagenPerfil = IFNULL(u_ImagenPerfil,ImagenPerfil),
		  Contra = IFNULL(u_Contra,Contra) 
   WHERE CveUsuario = u_id;
   SELECT * FROM Usuarios WHERE CveUsuario = u_id;
END //

DELIMITER ;
DROP PROCEDURE IF EXISTS LoginUsuario;
DELIMITER //
CREATE PROCEDURE LoginUsuario(IN u_Correo VARCHAR(100),IN u_Contra VARCHAR(30))
BEGIN 
   DECLARE u_id int;
  SELECT CveUSuario FROM Usuarios WHERE Correo = u_Correo AND Contra = u_Contra;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS getUserData;
DELIMITER //
CREATE PROCEDURE getUserData(IN u_Id INT)
BEGIN 
  SELECT CveUsuario,Nombre,Apellidos,FechaNacimiento,Correo,ImagenPerfil,NombreUsuario FROM Usuarios WHERE CveUSuario = u_Id;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS getAllPosts;
DELIMITER //
CREATE PROCEDURE getAllPosts()
BEGIN 
  SELECT CvePubli,Texto,Spoiler,Publicaciones.FechaCreacion, IdUsuario, CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto FROM Publicaciones INNER JOIN Usuarios ON CveUsuario = IdUsuario WHERE Activo = 1 ORDER BY CvePubli DESC;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS InsertarPublicacion;
DELIMITER //
CREATE PROCEDURE InsertarPublicacion(IN u_Texto VARCHAR(280),IN u_Imagen MEDIUMBLOB, IN u_Spoiler BIT,IN u_IdUsuario INT)
BEGIN 
   DECLARE u_id int;
   INSERT INTO Publicaciones(Texto,Imagen,Spoiler,IdUsuario,FechaCreacion) 
   VALUES (u_Texto,u_Imagen,u_Spoiler,u_IdUsuario,u_Activo,DATE(now()));
   SET u_id = last_insert_id();
   SELECT * FROM Publicaciones WHERE CvePubli = u_id;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS ActualizarPublicacion;
DELIMITER //
CREATE PROCEDURE ActualizarPublicacion(IN u_CvePubli INT,IN u_Texto VARCHAR(280),IN u_Imagen MEDIUMBLOB,IN u_Spoiler BIT)
BEGIN 
   SET u_Texto=IF(u_Texto='',NULL,u_Texto),
			u_Imagen=IF(u_Imagen='',NULL,u_Imagen),
            u_Spoiler=IF(u_Spoiler='',NULL,u_Spoiler);
   UPDATE Publicaciones SET Texto = u_Texto, Imagen= u_Imagen, Spoiler = u_Spoiler WHERE CvePubli = u_CvePubli;
   SELECT * FROM Publicaciones WHERE CvePubli = u_CvePubli AND Activo = 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS EliminarPublicacion;
DELIMITER //
CREATE PROCEDURE EliminarPublicacion(IN u_CvePubli INT)
BEGIN 
   UPDATE Publicaciones SET Activo = 0 WHERE CvePubli = u_CvePubli;
   SELECT * FROM Publicaciones WHERE CvePubli = u_CvePubli AND Activo = 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS InsertarLike;
DELIMITER //
CREATE PROCEDURE InsertarLike(IN u_CvePubli INT, IN u_CveUsuario INT)
BEGIN 
   INSERT Likes (IdPubli,IdUsuario) VALUES (u_CvePubli,u_CveUsuario);
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS EliminarLike;
DELIMITER //
CREATE PROCEDURE EliminarLike(IN u_CvePubli INT, IN u_CveUsuario INT)
BEGIN 
   IF(SELECT COUNT(*) AS TOTAL FROM Likes WHERE IdPubli = u_CvePubli AND  IdUsuario = u_CveUsuario) = 1
	THEN
   DELETE FROM Likes WHERE IdPubli = u_CvePubli AND  IdUsuario = u_CveUsuario;
   SELECT * FROM Publicaciones WHERE CvePubli = u_CvePubli AND Activo = 1;
   END IF;
END //
DELIMITER ;

SELECT * FROM Usuarios;
SELECT * FROM Publicaciones;
